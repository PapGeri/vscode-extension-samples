// Generated from ./grammar/P4grammar.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StartContext } from "./P4grammarParser";
import { ProgramContext } from "./P4grammarParser";
import { InputContext } from "./P4grammarParser";
import { DeclarationContext } from "./P4grammarParser";
import { PreprocessorLineContext } from "./P4grammarParser";
import { PpIncludeFileNameContext } from "./P4grammarParser";
import { NonTypeNameContext } from "./P4grammarParser";
import { NameContext } from "./P4grammarParser";
import { NonTableKwNameContext } from "./P4grammarParser";
import { OptCONSTContext } from "./P4grammarParser";
import { OptAnnotationsContext } from "./P4grammarParser";
import { AnnotationsContext } from "./P4grammarParser";
import { AnnotationContext } from "./P4grammarParser";
import { AnnotationBodyContext } from "./P4grammarParser";
import { AnnotationTokenContext } from "./P4grammarParser";
import { KvListContext } from "./P4grammarParser";
import { KvPairContext } from "./P4grammarParser";
import { ParameterListContext } from "./P4grammarParser";
import { NonEmptyParameterListContext } from "./P4grammarParser";
import { ParameterContext } from "./P4grammarParser";
import { DirectionContext } from "./P4grammarParser";
import { PackageTypeDeclarationContext } from "./P4grammarParser";
import { InstantiationContext } from "./P4grammarParser";
import { ObjInitializerContext } from "./P4grammarParser";
import { ObjDeclarationsContext } from "./P4grammarParser";
import { ObjDeclarationContext } from "./P4grammarParser";
import { OptConstructorParametersContext } from "./P4grammarParser";
import { DotPrefixContext } from "./P4grammarParser";
import { ParserDeclarationContext } from "./P4grammarParser";
import { ParserLocalElementsContext } from "./P4grammarParser";
import { ParserLocalElementContext } from "./P4grammarParser";
import { ParserTypeDeclarationContext } from "./P4grammarParser";
import { ParserStatesContext } from "./P4grammarParser";
import { ParserStateContext } from "./P4grammarParser";
import { ParserStatementsContext } from "./P4grammarParser";
import { ParserStatementContext } from "./P4grammarParser";
import { ParserBlockStatementContext } from "./P4grammarParser";
import { TransitionStatementContext } from "./P4grammarParser";
import { StateExpressionContext } from "./P4grammarParser";
import { SelectExpressionContext } from "./P4grammarParser";
import { SelectCaseListContext } from "./P4grammarParser";
import { SelectCaseContext } from "./P4grammarParser";
import { KeysetExpressionContext } from "./P4grammarParser";
import { TupleKeysetExpressionContext } from "./P4grammarParser";
import { SimpleExpressionListContext } from "./P4grammarParser";
import { SimpleKeysetExpressionContext } from "./P4grammarParser";
import { ValueSetDeclarationContext } from "./P4grammarParser";
import { ControlDeclarationContext } from "./P4grammarParser";
import { ControlTypeDeclarationContext } from "./P4grammarParser";
import { ControlLocalDeclarationsContext } from "./P4grammarParser";
import { ControlLocalDeclarationContext } from "./P4grammarParser";
import { ControlBodyContext } from "./P4grammarParser";
import { ExternDeclarationContext } from "./P4grammarParser";
import { MethodPrototypesContext } from "./P4grammarParser";
import { FunctionPrototypeContext } from "./P4grammarParser";
import { MethodPrototypeContext } from "./P4grammarParser";
import { TypeRefContext } from "./P4grammarParser";
import { NamedTypeContext } from "./P4grammarParser";
import { PrefixedTypeContext } from "./P4grammarParser";
import { TypeNameContext } from "./P4grammarParser";
import { TupleTypeContext } from "./P4grammarParser";
import { HeaderStackTypeContext } from "./P4grammarParser";
import { SpecializedTypeContext } from "./P4grammarParser";
import { BaseTypeContext } from "./P4grammarParser";
import { TypeOrVoidContext } from "./P4grammarParser";
import { OptTypeParametersContext } from "./P4grammarParser";
import { TypeParameterListContext } from "./P4grammarParser";
import { TypeArgContext } from "./P4grammarParser";
import { TypeArgumentListContext } from "./P4grammarParser";
import { RealTypeArgContext } from "./P4grammarParser";
import { RealTypeArgumentListContext } from "./P4grammarParser";
import { TypeDeclarationContext } from "./P4grammarParser";
import { DerivedTypeDeclarationContext } from "./P4grammarParser";
import { HeaderTypeDeclarationContext } from "./P4grammarParser";
import { StructTypeDeclarationContext } from "./P4grammarParser";
import { HeaderUnionDeclarationContext } from "./P4grammarParser";
import { StructFieldListContext } from "./P4grammarParser";
import { StructFieldContext } from "./P4grammarParser";
import { EnumDeclarationContext } from "./P4grammarParser";
import { SpecifiedIdentifierListContext } from "./P4grammarParser";
import { SpecifiedIdentifierContext } from "./P4grammarParser";
import { ErrorDeclarationContext } from "./P4grammarParser";
import { MatchKindDeclarationContext } from "./P4grammarParser";
import { IdentifierListContext } from "./P4grammarParser";
import { TypedefDeclarationContext } from "./P4grammarParser";
import { AssignmentOrMethodCallStatementContext } from "./P4grammarParser";
import { EmptyStatementContext } from "./P4grammarParser";
import { ExitStatementContext } from "./P4grammarParser";
import { ReturnStatementContext } from "./P4grammarParser";
import { ConditionalStatementContext } from "./P4grammarParser";
import { DirectApplicationContext } from "./P4grammarParser";
import { StatementContext } from "./P4grammarParser";
import { BlockStatementContext } from "./P4grammarParser";
import { StatOrDeclListContext } from "./P4grammarParser";
import { SwitchStatementContext } from "./P4grammarParser";
import { SwitchCasesContext } from "./P4grammarParser";
import { SwitchCaseContext } from "./P4grammarParser";
import { SwitchLabelContext } from "./P4grammarParser";
import { StatementOrDeclarationContext } from "./P4grammarParser";
import { TableDeclarationContext } from "./P4grammarParser";
import { TablePropertyListContext } from "./P4grammarParser";
import { TablePropertyContext } from "./P4grammarParser";
import { KeyElementListContext } from "./P4grammarParser";
import { KeyElementContext } from "./P4grammarParser";
import { ActionListContext } from "./P4grammarParser";
import { ActionRefContext } from "./P4grammarParser";
import { EntryContext } from "./P4grammarParser";
import { ActionBindingContext } from "./P4grammarParser";
import { EntriesListContext } from "./P4grammarParser";
import { ActionDeclarationContext } from "./P4grammarParser";
import { VariableDeclarationContext } from "./P4grammarParser";
import { ConstantDeclarationContext } from "./P4grammarParser";
import { OptInitializerContext } from "./P4grammarParser";
import { InitializerContext } from "./P4grammarParser";
import { FunctionDeclarationContext } from "./P4grammarParser";
import { ArgumentListContext } from "./P4grammarParser";
import { NonEmptyArgListContext } from "./P4grammarParser";
import { ArgumentContext } from "./P4grammarParser";
import { ExpressionListContext } from "./P4grammarParser";
import { PrefixedNonTypeNameContext } from "./P4grammarParser";
import { LvalueContext } from "./P4grammarParser";
import { ExpressionContext } from "./P4grammarParser";
import { Type_or_idContext } from "./P4grammarParser";
import { ParserStateConditionContext } from "./P4grammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `P4grammarParser`.
 */
export interface P4grammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `P4grammarParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.input`.
	 * @param ctx the parse tree
	 */
	enterInput?: (ctx: InputContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.input`.
	 * @param ctx the parse tree
	 */
	exitInput?: (ctx: InputContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.preprocessorLine`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorLine?: (ctx: PreprocessorLineContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.preprocessorLine`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorLine?: (ctx: PreprocessorLineContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.ppIncludeFileName`.
	 * @param ctx the parse tree
	 */
	enterPpIncludeFileName?: (ctx: PpIncludeFileNameContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.ppIncludeFileName`.
	 * @param ctx the parse tree
	 */
	exitPpIncludeFileName?: (ctx: PpIncludeFileNameContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.nonTypeName`.
	 * @param ctx the parse tree
	 */
	enterNonTypeName?: (ctx: NonTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.nonTypeName`.
	 * @param ctx the parse tree
	 */
	exitNonTypeName?: (ctx: NonTypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.nonTableKwName`.
	 * @param ctx the parse tree
	 */
	enterNonTableKwName?: (ctx: NonTableKwNameContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.nonTableKwName`.
	 * @param ctx the parse tree
	 */
	exitNonTableKwName?: (ctx: NonTableKwNameContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.optCONST`.
	 * @param ctx the parse tree
	 */
	enterOptCONST?: (ctx: OptCONSTContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.optCONST`.
	 * @param ctx the parse tree
	 */
	exitOptCONST?: (ctx: OptCONSTContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.optAnnotations`.
	 * @param ctx the parse tree
	 */
	enterOptAnnotations?: (ctx: OptAnnotationsContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.optAnnotations`.
	 * @param ctx the parse tree
	 */
	exitOptAnnotations?: (ctx: OptAnnotationsContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.annotations`.
	 * @param ctx the parse tree
	 */
	enterAnnotations?: (ctx: AnnotationsContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.annotations`.
	 * @param ctx the parse tree
	 */
	exitAnnotations?: (ctx: AnnotationsContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.annotationBody`.
	 * @param ctx the parse tree
	 */
	enterAnnotationBody?: (ctx: AnnotationBodyContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.annotationBody`.
	 * @param ctx the parse tree
	 */
	exitAnnotationBody?: (ctx: AnnotationBodyContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.annotationToken`.
	 * @param ctx the parse tree
	 */
	enterAnnotationToken?: (ctx: AnnotationTokenContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.annotationToken`.
	 * @param ctx the parse tree
	 */
	exitAnnotationToken?: (ctx: AnnotationTokenContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.kvList`.
	 * @param ctx the parse tree
	 */
	enterKvList?: (ctx: KvListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.kvList`.
	 * @param ctx the parse tree
	 */
	exitKvList?: (ctx: KvListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.kvPair`.
	 * @param ctx the parse tree
	 */
	enterKvPair?: (ctx: KvPairContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.kvPair`.
	 * @param ctx the parse tree
	 */
	exitKvPair?: (ctx: KvPairContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.nonEmptyParameterList`.
	 * @param ctx the parse tree
	 */
	enterNonEmptyParameterList?: (ctx: NonEmptyParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.nonEmptyParameterList`.
	 * @param ctx the parse tree
	 */
	exitNonEmptyParameterList?: (ctx: NonEmptyParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.direction`.
	 * @param ctx the parse tree
	 */
	enterDirection?: (ctx: DirectionContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.direction`.
	 * @param ctx the parse tree
	 */
	exitDirection?: (ctx: DirectionContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.packageTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageTypeDeclaration?: (ctx: PackageTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.packageTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageTypeDeclaration?: (ctx: PackageTypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.instantiation`.
	 * @param ctx the parse tree
	 */
	enterInstantiation?: (ctx: InstantiationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.instantiation`.
	 * @param ctx the parse tree
	 */
	exitInstantiation?: (ctx: InstantiationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.objInitializer`.
	 * @param ctx the parse tree
	 */
	enterObjInitializer?: (ctx: ObjInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.objInitializer`.
	 * @param ctx the parse tree
	 */
	exitObjInitializer?: (ctx: ObjInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.objDeclarations`.
	 * @param ctx the parse tree
	 */
	enterObjDeclarations?: (ctx: ObjDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.objDeclarations`.
	 * @param ctx the parse tree
	 */
	exitObjDeclarations?: (ctx: ObjDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.objDeclaration`.
	 * @param ctx the parse tree
	 */
	enterObjDeclaration?: (ctx: ObjDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.objDeclaration`.
	 * @param ctx the parse tree
	 */
	exitObjDeclaration?: (ctx: ObjDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.optConstructorParameters`.
	 * @param ctx the parse tree
	 */
	enterOptConstructorParameters?: (ctx: OptConstructorParametersContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.optConstructorParameters`.
	 * @param ctx the parse tree
	 */
	exitOptConstructorParameters?: (ctx: OptConstructorParametersContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.dotPrefix`.
	 * @param ctx the parse tree
	 */
	enterDotPrefix?: (ctx: DotPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.dotPrefix`.
	 * @param ctx the parse tree
	 */
	exitDotPrefix?: (ctx: DotPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.parserDeclaration`.
	 * @param ctx the parse tree
	 */
	enterParserDeclaration?: (ctx: ParserDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.parserDeclaration`.
	 * @param ctx the parse tree
	 */
	exitParserDeclaration?: (ctx: ParserDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.parserLocalElements`.
	 * @param ctx the parse tree
	 */
	enterParserLocalElements?: (ctx: ParserLocalElementsContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.parserLocalElements`.
	 * @param ctx the parse tree
	 */
	exitParserLocalElements?: (ctx: ParserLocalElementsContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.parserLocalElement`.
	 * @param ctx the parse tree
	 */
	enterParserLocalElement?: (ctx: ParserLocalElementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.parserLocalElement`.
	 * @param ctx the parse tree
	 */
	exitParserLocalElement?: (ctx: ParserLocalElementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.parserTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterParserTypeDeclaration?: (ctx: ParserTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.parserTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitParserTypeDeclaration?: (ctx: ParserTypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.parserStates`.
	 * @param ctx the parse tree
	 */
	enterParserStates?: (ctx: ParserStatesContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.parserStates`.
	 * @param ctx the parse tree
	 */
	exitParserStates?: (ctx: ParserStatesContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.parserState`.
	 * @param ctx the parse tree
	 */
	enterParserState?: (ctx: ParserStateContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.parserState`.
	 * @param ctx the parse tree
	 */
	exitParserState?: (ctx: ParserStateContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.parserStatements`.
	 * @param ctx the parse tree
	 */
	enterParserStatements?: (ctx: ParserStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.parserStatements`.
	 * @param ctx the parse tree
	 */
	exitParserStatements?: (ctx: ParserStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.parserStatement`.
	 * @param ctx the parse tree
	 */
	enterParserStatement?: (ctx: ParserStatementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.parserStatement`.
	 * @param ctx the parse tree
	 */
	exitParserStatement?: (ctx: ParserStatementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.parserBlockStatement`.
	 * @param ctx the parse tree
	 */
	enterParserBlockStatement?: (ctx: ParserBlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.parserBlockStatement`.
	 * @param ctx the parse tree
	 */
	exitParserBlockStatement?: (ctx: ParserBlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.transitionStatement`.
	 * @param ctx the parse tree
	 */
	enterTransitionStatement?: (ctx: TransitionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.transitionStatement`.
	 * @param ctx the parse tree
	 */
	exitTransitionStatement?: (ctx: TransitionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.stateExpression`.
	 * @param ctx the parse tree
	 */
	enterStateExpression?: (ctx: StateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.stateExpression`.
	 * @param ctx the parse tree
	 */
	exitStateExpression?: (ctx: StateExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.selectExpression`.
	 * @param ctx the parse tree
	 */
	enterSelectExpression?: (ctx: SelectExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.selectExpression`.
	 * @param ctx the parse tree
	 */
	exitSelectExpression?: (ctx: SelectExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.selectCaseList`.
	 * @param ctx the parse tree
	 */
	enterSelectCaseList?: (ctx: SelectCaseListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.selectCaseList`.
	 * @param ctx the parse tree
	 */
	exitSelectCaseList?: (ctx: SelectCaseListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.selectCase`.
	 * @param ctx the parse tree
	 */
	enterSelectCase?: (ctx: SelectCaseContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.selectCase`.
	 * @param ctx the parse tree
	 */
	exitSelectCase?: (ctx: SelectCaseContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.keysetExpression`.
	 * @param ctx the parse tree
	 */
	enterKeysetExpression?: (ctx: KeysetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.keysetExpression`.
	 * @param ctx the parse tree
	 */
	exitKeysetExpression?: (ctx: KeysetExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.tupleKeysetExpression`.
	 * @param ctx the parse tree
	 */
	enterTupleKeysetExpression?: (ctx: TupleKeysetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.tupleKeysetExpression`.
	 * @param ctx the parse tree
	 */
	exitTupleKeysetExpression?: (ctx: TupleKeysetExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.simpleExpressionList`.
	 * @param ctx the parse tree
	 */
	enterSimpleExpressionList?: (ctx: SimpleExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.simpleExpressionList`.
	 * @param ctx the parse tree
	 */
	exitSimpleExpressionList?: (ctx: SimpleExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.simpleKeysetExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleKeysetExpression?: (ctx: SimpleKeysetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.simpleKeysetExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleKeysetExpression?: (ctx: SimpleKeysetExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.valueSetDeclaration`.
	 * @param ctx the parse tree
	 */
	enterValueSetDeclaration?: (ctx: ValueSetDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.valueSetDeclaration`.
	 * @param ctx the parse tree
	 */
	exitValueSetDeclaration?: (ctx: ValueSetDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.controlDeclaration`.
	 * @param ctx the parse tree
	 */
	enterControlDeclaration?: (ctx: ControlDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.controlDeclaration`.
	 * @param ctx the parse tree
	 */
	exitControlDeclaration?: (ctx: ControlDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.controlTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterControlTypeDeclaration?: (ctx: ControlTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.controlTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitControlTypeDeclaration?: (ctx: ControlTypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.controlLocalDeclarations`.
	 * @param ctx the parse tree
	 */
	enterControlLocalDeclarations?: (ctx: ControlLocalDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.controlLocalDeclarations`.
	 * @param ctx the parse tree
	 */
	exitControlLocalDeclarations?: (ctx: ControlLocalDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.controlLocalDeclaration`.
	 * @param ctx the parse tree
	 */
	enterControlLocalDeclaration?: (ctx: ControlLocalDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.controlLocalDeclaration`.
	 * @param ctx the parse tree
	 */
	exitControlLocalDeclaration?: (ctx: ControlLocalDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.controlBody`.
	 * @param ctx the parse tree
	 */
	enterControlBody?: (ctx: ControlBodyContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.controlBody`.
	 * @param ctx the parse tree
	 */
	exitControlBody?: (ctx: ControlBodyContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.externDeclaration`.
	 * @param ctx the parse tree
	 */
	enterExternDeclaration?: (ctx: ExternDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.externDeclaration`.
	 * @param ctx the parse tree
	 */
	exitExternDeclaration?: (ctx: ExternDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.methodPrototypes`.
	 * @param ctx the parse tree
	 */
	enterMethodPrototypes?: (ctx: MethodPrototypesContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.methodPrototypes`.
	 * @param ctx the parse tree
	 */
	exitMethodPrototypes?: (ctx: MethodPrototypesContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.functionPrototype`.
	 * @param ctx the parse tree
	 */
	enterFunctionPrototype?: (ctx: FunctionPrototypeContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.functionPrototype`.
	 * @param ctx the parse tree
	 */
	exitFunctionPrototype?: (ctx: FunctionPrototypeContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.methodPrototype`.
	 * @param ctx the parse tree
	 */
	enterMethodPrototype?: (ctx: MethodPrototypeContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.methodPrototype`.
	 * @param ctx the parse tree
	 */
	exitMethodPrototype?: (ctx: MethodPrototypeContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.typeRef`.
	 * @param ctx the parse tree
	 */
	enterTypeRef?: (ctx: TypeRefContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.typeRef`.
	 * @param ctx the parse tree
	 */
	exitTypeRef?: (ctx: TypeRefContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.namedType`.
	 * @param ctx the parse tree
	 */
	enterNamedType?: (ctx: NamedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.namedType`.
	 * @param ctx the parse tree
	 */
	exitNamedType?: (ctx: NamedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.prefixedType`.
	 * @param ctx the parse tree
	 */
	enterPrefixedType?: (ctx: PrefixedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.prefixedType`.
	 * @param ctx the parse tree
	 */
	exitPrefixedType?: (ctx: PrefixedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.tupleType`.
	 * @param ctx the parse tree
	 */
	enterTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.tupleType`.
	 * @param ctx the parse tree
	 */
	exitTupleType?: (ctx: TupleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.headerStackType`.
	 * @param ctx the parse tree
	 */
	enterHeaderStackType?: (ctx: HeaderStackTypeContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.headerStackType`.
	 * @param ctx the parse tree
	 */
	exitHeaderStackType?: (ctx: HeaderStackTypeContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.specializedType`.
	 * @param ctx the parse tree
	 */
	enterSpecializedType?: (ctx: SpecializedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.specializedType`.
	 * @param ctx the parse tree
	 */
	exitSpecializedType?: (ctx: SpecializedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.baseType`.
	 * @param ctx the parse tree
	 */
	enterBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.baseType`.
	 * @param ctx the parse tree
	 */
	exitBaseType?: (ctx: BaseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.typeOrVoid`.
	 * @param ctx the parse tree
	 */
	enterTypeOrVoid?: (ctx: TypeOrVoidContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.typeOrVoid`.
	 * @param ctx the parse tree
	 */
	exitTypeOrVoid?: (ctx: TypeOrVoidContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.optTypeParameters`.
	 * @param ctx the parse tree
	 */
	enterOptTypeParameters?: (ctx: OptTypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.optTypeParameters`.
	 * @param ctx the parse tree
	 */
	exitOptTypeParameters?: (ctx: OptTypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.typeParameterList`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterList?: (ctx: TypeParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.typeParameterList`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterList?: (ctx: TypeParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.typeArg`.
	 * @param ctx the parse tree
	 */
	enterTypeArg?: (ctx: TypeArgContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.typeArg`.
	 * @param ctx the parse tree
	 */
	exitTypeArg?: (ctx: TypeArgContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.typeArgumentList`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentList?: (ctx: TypeArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.typeArgumentList`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentList?: (ctx: TypeArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.realTypeArg`.
	 * @param ctx the parse tree
	 */
	enterRealTypeArg?: (ctx: RealTypeArgContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.realTypeArg`.
	 * @param ctx the parse tree
	 */
	exitRealTypeArg?: (ctx: RealTypeArgContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.realTypeArgumentList`.
	 * @param ctx the parse tree
	 */
	enterRealTypeArgumentList?: (ctx: RealTypeArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.realTypeArgumentList`.
	 * @param ctx the parse tree
	 */
	exitRealTypeArgumentList?: (ctx: RealTypeArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.derivedTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterDerivedTypeDeclaration?: (ctx: DerivedTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.derivedTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitDerivedTypeDeclaration?: (ctx: DerivedTypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.headerTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterHeaderTypeDeclaration?: (ctx: HeaderTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.headerTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitHeaderTypeDeclaration?: (ctx: HeaderTypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.structTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStructTypeDeclaration?: (ctx: StructTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.structTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStructTypeDeclaration?: (ctx: StructTypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.headerUnionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterHeaderUnionDeclaration?: (ctx: HeaderUnionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.headerUnionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitHeaderUnionDeclaration?: (ctx: HeaderUnionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.structFieldList`.
	 * @param ctx the parse tree
	 */
	enterStructFieldList?: (ctx: StructFieldListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.structFieldList`.
	 * @param ctx the parse tree
	 */
	exitStructFieldList?: (ctx: StructFieldListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.structField`.
	 * @param ctx the parse tree
	 */
	enterStructField?: (ctx: StructFieldContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.structField`.
	 * @param ctx the parse tree
	 */
	exitStructField?: (ctx: StructFieldContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.specifiedIdentifierList`.
	 * @param ctx the parse tree
	 */
	enterSpecifiedIdentifierList?: (ctx: SpecifiedIdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.specifiedIdentifierList`.
	 * @param ctx the parse tree
	 */
	exitSpecifiedIdentifierList?: (ctx: SpecifiedIdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.specifiedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterSpecifiedIdentifier?: (ctx: SpecifiedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.specifiedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitSpecifiedIdentifier?: (ctx: SpecifiedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.errorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterErrorDeclaration?: (ctx: ErrorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.errorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitErrorDeclaration?: (ctx: ErrorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.matchKindDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMatchKindDeclaration?: (ctx: MatchKindDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.matchKindDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMatchKindDeclaration?: (ctx: MatchKindDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.typedefDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypedefDeclaration?: (ctx: TypedefDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.typedefDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypedefDeclaration?: (ctx: TypedefDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.assignmentOrMethodCallStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOrMethodCallStatement?: (ctx: AssignmentOrMethodCallStatementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.assignmentOrMethodCallStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOrMethodCallStatement?: (ctx: AssignmentOrMethodCallStatementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement?: (ctx: EmptyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.exitStatement`.
	 * @param ctx the parse tree
	 */
	enterExitStatement?: (ctx: ExitStatementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.exitStatement`.
	 * @param ctx the parse tree
	 */
	exitExitStatement?: (ctx: ExitStatementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	enterConditionalStatement?: (ctx: ConditionalStatementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.conditionalStatement`.
	 * @param ctx the parse tree
	 */
	exitConditionalStatement?: (ctx: ConditionalStatementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.directApplication`.
	 * @param ctx the parse tree
	 */
	enterDirectApplication?: (ctx: DirectApplicationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.directApplication`.
	 * @param ctx the parse tree
	 */
	exitDirectApplication?: (ctx: DirectApplicationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.statOrDeclList`.
	 * @param ctx the parse tree
	 */
	enterStatOrDeclList?: (ctx: StatOrDeclListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.statOrDeclList`.
	 * @param ctx the parse tree
	 */
	exitStatOrDeclList?: (ctx: StatOrDeclListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.switchStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.switchCases`.
	 * @param ctx the parse tree
	 */
	enterSwitchCases?: (ctx: SwitchCasesContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.switchCases`.
	 * @param ctx the parse tree
	 */
	exitSwitchCases?: (ctx: SwitchCasesContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.switchCase`.
	 * @param ctx the parse tree
	 */
	enterSwitchCase?: (ctx: SwitchCaseContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.switchCase`.
	 * @param ctx the parse tree
	 */
	exitSwitchCase?: (ctx: SwitchCaseContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	enterSwitchLabel?: (ctx: SwitchLabelContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.switchLabel`.
	 * @param ctx the parse tree
	 */
	exitSwitchLabel?: (ctx: SwitchLabelContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.statementOrDeclaration`.
	 * @param ctx the parse tree
	 */
	enterStatementOrDeclaration?: (ctx: StatementOrDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.statementOrDeclaration`.
	 * @param ctx the parse tree
	 */
	exitStatementOrDeclaration?: (ctx: StatementOrDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.tableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTableDeclaration?: (ctx: TableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.tableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTableDeclaration?: (ctx: TableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.tablePropertyList`.
	 * @param ctx the parse tree
	 */
	enterTablePropertyList?: (ctx: TablePropertyListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.tablePropertyList`.
	 * @param ctx the parse tree
	 */
	exitTablePropertyList?: (ctx: TablePropertyListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	enterTableProperty?: (ctx: TablePropertyContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.tableProperty`.
	 * @param ctx the parse tree
	 */
	exitTableProperty?: (ctx: TablePropertyContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.keyElementList`.
	 * @param ctx the parse tree
	 */
	enterKeyElementList?: (ctx: KeyElementListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.keyElementList`.
	 * @param ctx the parse tree
	 */
	exitKeyElementList?: (ctx: KeyElementListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.keyElement`.
	 * @param ctx the parse tree
	 */
	enterKeyElement?: (ctx: KeyElementContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.keyElement`.
	 * @param ctx the parse tree
	 */
	exitKeyElement?: (ctx: KeyElementContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.actionList`.
	 * @param ctx the parse tree
	 */
	enterActionList?: (ctx: ActionListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.actionList`.
	 * @param ctx the parse tree
	 */
	exitActionList?: (ctx: ActionListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.actionRef`.
	 * @param ctx the parse tree
	 */
	enterActionRef?: (ctx: ActionRefContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.actionRef`.
	 * @param ctx the parse tree
	 */
	exitActionRef?: (ctx: ActionRefContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.entry`.
	 * @param ctx the parse tree
	 */
	enterEntry?: (ctx: EntryContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.entry`.
	 * @param ctx the parse tree
	 */
	exitEntry?: (ctx: EntryContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.actionBinding`.
	 * @param ctx the parse tree
	 */
	enterActionBinding?: (ctx: ActionBindingContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.actionBinding`.
	 * @param ctx the parse tree
	 */
	exitActionBinding?: (ctx: ActionBindingContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.entriesList`.
	 * @param ctx the parse tree
	 */
	enterEntriesList?: (ctx: EntriesListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.entriesList`.
	 * @param ctx the parse tree
	 */
	exitEntriesList?: (ctx: EntriesListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.actionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterActionDeclaration?: (ctx: ActionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.actionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitActionDeclaration?: (ctx: ActionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.constantDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.constantDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstantDeclaration?: (ctx: ConstantDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.optInitializer`.
	 * @param ctx the parse tree
	 */
	enterOptInitializer?: (ctx: OptInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.optInitializer`.
	 * @param ctx the parse tree
	 */
	exitOptInitializer?: (ctx: OptInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.initializer`.
	 * @param ctx the parse tree
	 */
	enterInitializer?: (ctx: InitializerContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.initializer`.
	 * @param ctx the parse tree
	 */
	exitInitializer?: (ctx: InitializerContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.nonEmptyArgList`.
	 * @param ctx the parse tree
	 */
	enterNonEmptyArgList?: (ctx: NonEmptyArgListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.nonEmptyArgList`.
	 * @param ctx the parse tree
	 */
	exitNonEmptyArgList?: (ctx: NonEmptyArgListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.prefixedNonTypeName`.
	 * @param ctx the parse tree
	 */
	enterPrefixedNonTypeName?: (ctx: PrefixedNonTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.prefixedNonTypeName`.
	 * @param ctx the parse tree
	 */
	exitPrefixedNonTypeName?: (ctx: PrefixedNonTypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.lvalue`.
	 * @param ctx the parse tree
	 */
	enterLvalue?: (ctx: LvalueContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.lvalue`.
	 * @param ctx the parse tree
	 */
	exitLvalue?: (ctx: LvalueContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.type_or_id`.
	 * @param ctx the parse tree
	 */
	enterType_or_id?: (ctx: Type_or_idContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.type_or_id`.
	 * @param ctx the parse tree
	 */
	exitType_or_id?: (ctx: Type_or_idContext) => void;

	/**
	 * Enter a parse tree produced by `P4grammarParser.parserStateCondition`.
	 * @param ctx the parse tree
	 */
	enterParserStateCondition?: (ctx: ParserStateConditionContext) => void;
	/**
	 * Exit a parse tree produced by `P4grammarParser.parserStateCondition`.
	 * @param ctx the parse tree
	 */
	exitParserStateCondition?: (ctx: ParserStateConditionContext) => void;
}

