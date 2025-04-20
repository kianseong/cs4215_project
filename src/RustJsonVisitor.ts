import { AbstractParseTreeVisitor } from 'antlr4ng';
import { ParamContext, StmtContext, ExprContext, ProgContext, LitContext, Return_stmtContext, Argument_listContext, Fn_call_exprContext, Fn_decl_stmtContext, Return_typeContext, Param_listContext, Assignment_stmtContext, Declaration_stmtContext, Break_stmtContext, Continue_stmtContext, If_exprContext, Else_exprContext, While_stmtContext, Expr_stmtContext, BlockContext, Empty_stmtContext} from './parser/src/RustParser';
import { RustVisitor } from './parser/src/RustVisitor';

export class RustJsonVisitor extends AbstractParseTreeVisitor<any> implements RustVisitor<any> {

    visitProg(ctx: ProgContext): any {
        let jsonStatements: any[] = ctx.stmt().map(stmt => this.visit(stmt))

        let valueProducing = false
        const valueExpr: ExprContext = ctx.expr()
        if (valueExpr !== null) {
            jsonStatements.push(this.visit(valueExpr))
            valueProducing = true
        } else {
            if (jsonStatements.length != 0 && jsonStatements[jsonStatements.length - 1].valueProducing === true) {
                valueProducing = true
            }
        }
        return {
            tag: "block",
            body: jsonStatements,
            valueProducing: valueProducing
        }
    }

    visitEmpty_stmt(_: Empty_stmtContext): any { 
        return {
            tag: "empty"
        }
    };

    visitStmt(ctx: StmtContext): any{
        return this.visit(ctx.getChild(0))
    }

    visitExpr(ctx: ExprContext): any {
        if (ctx.if_expr() != null) {
            return this.visit(ctx.if_expr())
        }
        if (ctx.lit() !== null) {
            return this.visit(ctx.lit())
        }
        if (ctx.IDENT() !== null) {
            return {
                tag: "nam",
                sym: ctx.IDENT().getText()
            }
        }
        if (ctx.fn_call_expr() !== null) {
            return this.visit(ctx.fn_call_expr())
        }
        if (ctx.getChildCount() === 2) {
            const op = ctx.getChild(0).getText();
            const expression = this.visit(ctx.getChild(1) as ExprContext)
            return {
                tag: "unop",
                sym: op,
                frst: expression
            }
        } else if (ctx.getChildCount() === 3) {
            if (ctx.getChild(0).getText() === '(' && ctx.getChild(2).getText() === ')') {
                // Parenthesized expression
                return this.visit(ctx.getChild(1))
            } else {
                // Binary operation
                const left = this.visit(ctx.getChild(0) as ExprContext);
                const op = ctx.getChild(1).getText();
                const right = this.visit(ctx.getChild(2) as ExprContext);
                return {
                    tag: "binop",
                    sym: op,
                    frst: left,
                    scnd: right
                }
            }
        }

        throw new Error(`Invalid expression: ${ctx.getText()}`);
    }


    visitBlock(ctx: BlockContext): any {
        let jsonStatements: any[] = ctx.stmt().map(stmt => this.visit(stmt))

        let valueProducing = false
        const valueExpr: ExprContext = ctx.expr()
        if (valueExpr !== null) {
            jsonStatements.push(this.visit(valueExpr))
            valueProducing = true
        } else {
            if (jsonStatements.length != 0 && jsonStatements[jsonStatements.length - 1].valueProducing === true) {
                console.log("Here")
                valueProducing = true
            }
        }
        return {
            tag: "block",
            body: jsonStatements,
            valueProducing: valueProducing
        }
    }

    visitExpr_stmt(ctx: Expr_stmtContext): any{
        return this.visit(ctx.expr())
    }

    visitWhile_stmt(ctx: While_stmtContext): any {
        let body = this.visit(ctx.block())
        return {
            tag: "while",
            pred: this.visit(ctx.expr()),
            body: body,
            valueProducing: body.valueProducing
        }
    }

    visitBreak_stmt(ctx: Break_stmtContext): any {
        return {
            tag: "break"
        }
    }

    visitContinue_stmt(ctx: Continue_stmtContext): any {
        return {
            tag: "continue"
        }
    }

    visitIf_expr(ctx: If_exprContext): any {
        let ifJson = this.visit(ctx.block())
        let elseBlock = ctx.else_expr()
        let elseJson = undefined
        if (elseBlock !== null) {
            elseJson = this.visit(elseBlock).alt
            if (ifJson.valueProducing !== elseJson.valueProducing) {
                throw new Error("cons and alt of conditional has to be both value producing or not")
            }
        }
        return {
            tag: "cond",
            pred: this.visit(ctx.expr()),
            cons: ifJson,
            alt: elseJson,
        }
    }

    visitElse_expr(ctx: Else_exprContext): any {
        return {
            tag: "condElse",
            alt: this.visit(ctx.block())
        }
    }

    visitDeclaration_stmt(ctx: Declaration_stmtContext): any {
        return {
            tag: "let",
            sym: ctx.IDENT().getText(),
            type: ctx.TYPE().getText(),
            mut: ctx.KW_MUT() !== null,
            expr: this.visit(ctx.expr())
        }
    }

    visitAssignment_stmt(ctx: Assignment_stmtContext): any {
        return {
            tag: "assmt",
            sym: ctx.IDENT().getText(),
            expr: this.visit(ctx.expr())
        }
    }

    visitParam(ctx: ParamContext): any {
        return {
            tag: "taggedSym",
            sym: ctx.IDENT().getText(),
            type: ctx.TYPE().getText()
        }
    }

    visitParam_list(ctx: Param_listContext): any {
        return {
            tag: "paramList",
            prms: ctx.param().map(stmt => this.visit(stmt))
        }
    }

    visitReturn_type(ctx: Return_typeContext): any {
        return {
            tag: "retType",
            type: ctx.TYPE().getText()
        }
    }

    visitFn_decl_stmt(ctx: Fn_decl_stmtContext): any {
        let returnTypeBlock = ctx.return_type()
        let returnType = undefined
        if (returnTypeBlock !== null) {
            returnType = this.visit(returnTypeBlock).type
        }

        let paramListBlock = ctx.param_list()
        let paramList = []
        if (paramListBlock !== null) {
            paramList = this.visit(ctx.param_list()).prms
        }
        return {
            tag: "fun",
            sym: ctx.IDENT().getText(),
            retType: returnType,
            prms: paramList,
            body: this.visit(ctx.block()),
            type: "function",
            mut: false
        }
    }

    visitFn_call_expr(ctx: Fn_call_exprContext): any {
        let args = []
        if (ctx.argument_list() !== null) {
            args = this.visit(ctx.argument_list()).args
        }
        return {
            tag: "app",
            fun: {
                tag: "nam",
                sym: ctx.IDENT().getText()
                },
            args: args
        }
    }

    visitArgument_list(ctx: Argument_listContext): any {
        return {
            tag: "arg_list",
            args: ctx.expr().map(stmt => this.visit(stmt))
        }
    }

    visitReturn_stmt(ctx: Return_stmtContext): any {
        let return_expr
        if (ctx.expr() === null) {
            return_expr = null
        } else {
            return_expr = this.visit(ctx.expr())
        }
        return {
            tag: "ret",
            expr: return_expr
        }
    }

    visitLit(ctx: LitContext): any {
        const int_lit = ctx.INT()
        const bool_lit = ctx.BOOL()
        if (int_lit !== null) {
            return {
                tag: "lit",
                val: parseInt(int_lit.getText())
            }
        }
        if (bool_lit !== null) {
            return {
                tag: "lit",
                val: bool_lit.getText() === "true"
            }
        }
    }

    // Override the default result method from AbstractParseTreeVisitor
    protected defaultResult(): any {
        return undefined;
    }

    // Override the aggregate result method
    protected aggregateResult(aggregate: number, nextResult: number): any {
        return nextResult;
    }
}
