import ts from 'typescript';
import { PluginConfig, TransformerExtras } from 'ts-patch';

declare function export_default(program: ts.Program, _pluginConfig: PluginConfig, _extras: TransformerExtras): (_ctx: ts.TransformationContext) => (sourceFile: ts.SourceFile) => ts.SourceFile;

export { export_default as default };
