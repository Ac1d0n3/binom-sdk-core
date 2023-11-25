import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function updateToV020(): Rule {
    return (tree: Tree, context: SchematicContext) => {
        context.logger.log('info', `🅰️ Update Schematics`);
        return tree;
    };
}