// Generated from src/Rust.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { LitContext } from "./RustParser.js";
import { ProgContext } from "./RustParser.js";
import { StmtContext } from "./RustParser.js";
import { ExprContext } from "./RustParser.js";
import { BlockContext } from "./RustParser.js";
import { Expr_stmtContext } from "./RustParser.js";
import { Empty_stmtContext } from "./RustParser.js";
import { While_stmtContext } from "./RustParser.js";
import { Break_stmtContext } from "./RustParser.js";
import { Continue_stmtContext } from "./RustParser.js";
import { If_exprContext } from "./RustParser.js";
import { Else_exprContext } from "./RustParser.js";
import { Declaration_stmtContext } from "./RustParser.js";
import { Assignment_stmtContext } from "./RustParser.js";
import { ParamContext } from "./RustParser.js";
import { Param_listContext } from "./RustParser.js";
import { Return_typeContext } from "./RustParser.js";
import { Fn_decl_stmtContext } from "./RustParser.js";
import { Fn_call_exprContext } from "./RustParser.js";
import { Argument_listContext } from "./RustParser.js";
import { Return_stmtContext } from "./RustParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RustParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class RustVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `RustParser.lit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLit?: (ctx: LitContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt?: (ctx: StmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr?: (ctx: ExprContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.expr_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_stmt?: (ctx: Expr_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.empty_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmpty_stmt?: (ctx: Empty_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.while_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhile_stmt?: (ctx: While_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.break_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreak_stmt?: (ctx: Break_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.continue_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinue_stmt?: (ctx: Continue_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.if_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIf_expr?: (ctx: If_exprContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.else_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElse_expr?: (ctx: Else_exprContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.declaration_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclaration_stmt?: (ctx: Declaration_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.assignment_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignment_stmt?: (ctx: Assignment_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam?: (ctx: ParamContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.param_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam_list?: (ctx: Param_listContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.return_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturn_type?: (ctx: Return_typeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.fn_decl_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFn_decl_stmt?: (ctx: Fn_decl_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.fn_call_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFn_call_expr?: (ctx: Fn_call_exprContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.argument_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgument_list?: (ctx: Argument_listContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.return_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturn_stmt?: (ctx: Return_stmtContext) => Result;
}

