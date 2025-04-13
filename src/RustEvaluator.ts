import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from 'antlr4ng';
import { RustLexer } from './parser/src/RustLexer';
import { ExprContext, ProgContext, RustParser } from './parser/src/RustParser';
import {RustJsonVisitor} from './RustJsonVisitor';
import { RustCompiler } from "./RustCompiler";
import { RustVirtualMachine } from "./RustVirtualMachine";

export class RustEvaluator extends BasicEvaluator {
    private executionCount: number;
    private visitor: RustJsonVisitor;
    private compiler: RustCompiler;
    private machine: RustVirtualMachine;


    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
        this.visitor = new RustJsonVisitor();
        this.compiler = new RustCompiler();
        this.machine = new RustVirtualMachine(100, 10);
    }

    async evaluateChunk(chunk: string): Promise<void> {
        this.executionCount++;
        try {
            console.log('test')
            // Create the lexer and parser
            const inputStream = CharStream.fromString(chunk);
            const lexer = new RustLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new RustParser(tokenStream);

            // Parse the input
            const tree = parser.prog();

            // Evaluate the parsed tree
            const jsonProgram = this.visitor.visit(tree);

            // Compile json program
            const compiledProgram = this.compiler.compile_program(jsonProgram)

            // run VM and get result
            this.machine.initialize_machine()
            const result = this.machine.run(compiledProgram)

            // Send the result to the REPL
            this.conductor.sendOutput(`Result of expression: ${result}`);
        }  catch (error) {
            // Handle errors and send them to the REPL
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}
