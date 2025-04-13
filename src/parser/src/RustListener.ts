// Generated from src/Rust.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgContext } from "./RustParser.js";
import { StmtContext } from "./RustParser.js";
import { ExprContext } from "./RustParser.js";
import { BlockContext } from "./RustParser.js";
import { Expr_stmtContext } from "./RustParser.js";
import { Empty_stmtContext } from "./RustParser.js";
import { While_stmtContext } from "./RustParser.js";
import { Break_stmtContext } from "./RustParser.js";
import { Continue_stmtContext } from "./RustParser.js";
import { If_stmtContext } from "./RustParser.js";
import { Else_stmtContext } from "./RustParser.js";
import { Declaration_stmtContext } from "./RustParser.js";
import { Assignment_stmtContext } from "./RustParser.js";
import { ParamContext } from "./RustParser.js";
import { Param_listContext } from "./RustParser.js";
import { Return_typeContext } from "./RustParser.js";
import { Fn_decl_stmtContext } from "./RustParser.js";
import { Fn_call_exprContext } from "./RustParser.js";
import { Argument_listContext } from "./RustParser.js";
import { Return_stmtContext } from "./RustParser.js";
import { LitContext } from "./RustParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RustParser`.
 */
export class RustListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `RustParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.stmt`.
     * @param ctx the parse tree
     */
    enterStmt?: (ctx: StmtContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.stmt`.
     * @param ctx the parse tree
     */
    exitStmt?: (ctx: StmtContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.expr`.
     * @param ctx the parse tree
     */
    enterExpr?: (ctx: ExprContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.expr`.
     * @param ctx the parse tree
     */
    exitExpr?: (ctx: ExprContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.expr_stmt`.
     * @param ctx the parse tree
     */
    enterExpr_stmt?: (ctx: Expr_stmtContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.expr_stmt`.
     * @param ctx the parse tree
     */
    exitExpr_stmt?: (ctx: Expr_stmtContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.empty_stmt`.
     * @param ctx the parse tree
     */
    enterEmpty_stmt?: (ctx: Empty_stmtContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.empty_stmt`.
     * @param ctx the parse tree
     */
    exitEmpty_stmt?: (ctx: Empty_stmtContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.while_stmt`.
     * @param ctx the parse tree
     */
    enterWhile_stmt?: (ctx: While_stmtContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.while_stmt`.
     * @param ctx the parse tree
     */
    exitWhile_stmt?: (ctx: While_stmtContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.break_stmt`.
     * @param ctx the parse tree
     */
    enterBreak_stmt?: (ctx: Break_stmtContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.break_stmt`.
     * @param ctx the parse tree
     */
    exitBreak_stmt?: (ctx: Break_stmtContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.continue_stmt`.
     * @param ctx the parse tree
     */
    enterContinue_stmt?: (ctx: Continue_stmtContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.continue_stmt`.
     * @param ctx the parse tree
     */
    exitContinue_stmt?: (ctx: Continue_stmtContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.if_stmt`.
     * @param ctx the parse tree
     */
    enterIf_stmt?: (ctx: If_stmtContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.if_stmt`.
     * @param ctx the parse tree
     */
    exitIf_stmt?: (ctx: If_stmtContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.else_stmt`.
     * @param ctx the parse tree
     */
    enterElse_stmt?: (ctx: Else_stmtContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.else_stmt`.
     * @param ctx the parse tree
     */
    exitElse_stmt?: (ctx: Else_stmtContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.declaration_stmt`.
     * @param ctx the parse tree
     */
    enterDeclaration_stmt?: (ctx: Declaration_stmtContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.declaration_stmt`.
     * @param ctx the parse tree
     */
    exitDeclaration_stmt?: (ctx: Declaration_stmtContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.assignment_stmt`.
     * @param ctx the parse tree
     */
    enterAssignment_stmt?: (ctx: Assignment_stmtContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.assignment_stmt`.
     * @param ctx the parse tree
     */
    exitAssignment_stmt?: (ctx: Assignment_stmtContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.param`.
     * @param ctx the parse tree
     */
    enterParam?: (ctx: ParamContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.param`.
     * @param ctx the parse tree
     */
    exitParam?: (ctx: ParamContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.param_list`.
     * @param ctx the parse tree
     */
    enterParam_list?: (ctx: Param_listContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.param_list`.
     * @param ctx the parse tree
     */
    exitParam_list?: (ctx: Param_listContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.return_type`.
     * @param ctx the parse tree
     */
    enterReturn_type?: (ctx: Return_typeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.return_type`.
     * @param ctx the parse tree
     */
    exitReturn_type?: (ctx: Return_typeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.fn_decl_stmt`.
     * @param ctx the parse tree
     */
    enterFn_decl_stmt?: (ctx: Fn_decl_stmtContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.fn_decl_stmt`.
     * @param ctx the parse tree
     */
    exitFn_decl_stmt?: (ctx: Fn_decl_stmtContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.fn_call_expr`.
     * @param ctx the parse tree
     */
    enterFn_call_expr?: (ctx: Fn_call_exprContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.fn_call_expr`.
     * @param ctx the parse tree
     */
    exitFn_call_expr?: (ctx: Fn_call_exprContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.argument_list`.
     * @param ctx the parse tree
     */
    enterArgument_list?: (ctx: Argument_listContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.argument_list`.
     * @param ctx the parse tree
     */
    exitArgument_list?: (ctx: Argument_listContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.return_stmt`.
     * @param ctx the parse tree
     */
    enterReturn_stmt?: (ctx: Return_stmtContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.return_stmt`.
     * @param ctx the parse tree
     */
    exitReturn_stmt?: (ctx: Return_stmtContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.lit`.
     * @param ctx the parse tree
     */
    enterLit?: (ctx: LitContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.lit`.
     * @param ctx the parse tree
     */
    exitLit?: (ctx: LitContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

