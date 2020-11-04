// Generated from ./grammar/P4grammar.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `P4grammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface P4grammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `P4grammarParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput?: (ctx: InputContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.preprocessorLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorLine?: (ctx: PreprocessorLineContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.ppIncludeFileName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPpIncludeFileName?: (ctx: PpIncludeFileNameContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.nonTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonTypeName?: (ctx: NonTypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.nonTableKwName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonTableKwName?: (ctx: NonTableKwNameContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.optCONST`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptCONST?: (ctx: OptCONSTContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.optAnnotations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptAnnotations?: (ctx: OptAnnotationsContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.annotations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotations?: (ctx: AnnotationsContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.annotationBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationBody?: (ctx: AnnotationBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.annotationToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationToken?: (ctx: AnnotationTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.kvList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKvList?: (ctx: KvListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.kvPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKvPair?: (ctx: KvPairContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.nonEmptyParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonEmptyParameterList?: (ctx: NonEmptyParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.direction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirection?: (ctx: DirectionContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.packageTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageTypeDeclaration?: (ctx: PackageTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.instantiation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstantiation?: (ctx: InstantiationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.objInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjInitializer?: (ctx: ObjInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.objDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjDeclarations?: (ctx: ObjDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.objDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjDeclaration?: (ctx: ObjDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.optConstructorParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptConstructorParameters?: (ctx: OptConstructorParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.dotPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotPrefix?: (ctx: DotPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.parserDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParserDeclaration?: (ctx: ParserDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.parserLocalElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParserLocalElements?: (ctx: ParserLocalElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.parserLocalElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParserLocalElement?: (ctx: ParserLocalElementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.parserTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParserTypeDeclaration?: (ctx: ParserTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.parserStates`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParserStates?: (ctx: ParserStatesContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.parserState`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParserState?: (ctx: ParserStateContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.parserStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParserStatements?: (ctx: ParserStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.parserStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParserStatement?: (ctx: ParserStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.parserBlockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParserBlockStatement?: (ctx: ParserBlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.transitionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransitionStatement?: (ctx: TransitionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.stateExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateExpression?: (ctx: StateExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.selectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectExpression?: (ctx: SelectExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.selectCaseList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectCaseList?: (ctx: SelectCaseListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.selectCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectCase?: (ctx: SelectCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.keysetExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeysetExpression?: (ctx: KeysetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.tupleKeysetExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleKeysetExpression?: (ctx: TupleKeysetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.simpleExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleExpressionList?: (ctx: SimpleExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.simpleKeysetExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleKeysetExpression?: (ctx: SimpleKeysetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.valueSetDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueSetDeclaration?: (ctx: ValueSetDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.controlDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlDeclaration?: (ctx: ControlDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.controlTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlTypeDeclaration?: (ctx: ControlTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.controlLocalDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlLocalDeclarations?: (ctx: ControlLocalDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.controlLocalDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlLocalDeclaration?: (ctx: ControlLocalDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.controlBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlBody?: (ctx: ControlBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.externDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternDeclaration?: (ctx: ExternDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.methodPrototypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodPrototypes?: (ctx: MethodPrototypesContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.functionPrototype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionPrototype?: (ctx: FunctionPrototypeContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.methodPrototype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodPrototype?: (ctx: MethodPrototypeContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.typeRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRef?: (ctx: TypeRefContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.namedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedType?: (ctx: NamedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.prefixedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixedType?: (ctx: PrefixedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.tupleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleType?: (ctx: TupleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.headerStackType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeaderStackType?: (ctx: HeaderStackTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.specializedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecializedType?: (ctx: SpecializedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.baseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseType?: (ctx: BaseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.typeOrVoid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeOrVoid?: (ctx: TypeOrVoidContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.optTypeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptTypeParameters?: (ctx: OptTypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.typeParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterList?: (ctx: TypeParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.typeArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArg?: (ctx: TypeArgContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.typeArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentList?: (ctx: TypeArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.realTypeArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealTypeArg?: (ctx: RealTypeArgContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.realTypeArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealTypeArgumentList?: (ctx: RealTypeArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.derivedTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDerivedTypeDeclaration?: (ctx: DerivedTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.headerTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeaderTypeDeclaration?: (ctx: HeaderTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.structTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructTypeDeclaration?: (ctx: StructTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.headerUnionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeaderUnionDeclaration?: (ctx: HeaderUnionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.structFieldList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructFieldList?: (ctx: StructFieldListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.structField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructField?: (ctx: StructFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.specifiedIdentifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecifiedIdentifierList?: (ctx: SpecifiedIdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.specifiedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecifiedIdentifier?: (ctx: SpecifiedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.errorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorDeclaration?: (ctx: ErrorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.matchKindDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchKindDeclaration?: (ctx: MatchKindDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.typedefDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedefDeclaration?: (ctx: TypedefDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.assignmentOrMethodCallStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOrMethodCallStatement?: (ctx: AssignmentOrMethodCallStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.exitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExitStatement?: (ctx: ExitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.conditionalStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalStatement?: (ctx: ConditionalStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.directApplication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectApplication?: (ctx: DirectApplicationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.statOrDeclList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatOrDeclList?: (ctx: StatOrDeclListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.switchCases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchCases?: (ctx: SwitchCasesContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.switchCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchCase?: (ctx: SwitchCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.statementOrDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementOrDeclaration?: (ctx: StatementOrDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.tableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableDeclaration?: (ctx: TableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.tablePropertyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertyList?: (ctx: TablePropertyListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.tableProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperty?: (ctx: TablePropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.keyElementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyElementList?: (ctx: KeyElementListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.keyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyElement?: (ctx: KeyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.actionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionList?: (ctx: ActionListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.actionRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionRef?: (ctx: ActionRefContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.entry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntry?: (ctx: EntryContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.actionBinding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionBinding?: (ctx: ActionBindingContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.entriesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntriesList?: (ctx: EntriesListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.actionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionDeclaration?: (ctx: ActionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.constantDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclaration?: (ctx: ConstantDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.optInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptInitializer?: (ctx: OptInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.nonEmptyArgList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonEmptyArgList?: (ctx: NonEmptyArgListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.prefixedNonTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixedNonTypeName?: (ctx: PrefixedNonTypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalue?: (ctx: LvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.type_or_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_or_id?: (ctx: Type_or_idContext) => Result;

	/**
	 * Visit a parse tree produced by `P4grammarParser.parserStateCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParserStateCondition?: (ctx: ParserStateConditionContext) => Result;
}

