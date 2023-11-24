
import { Rule,SchematicContext,Tree } from '@angular-devkit/schematics';
import { addRootImport, } from '@schematics/angular/utility';


export function ngAdd(): Rule {
    return (tree: Tree, context: SchematicContext) => {
       context.logger.log('info', `✅️ Running Schematics`);
       
       return tree;
    };
 }