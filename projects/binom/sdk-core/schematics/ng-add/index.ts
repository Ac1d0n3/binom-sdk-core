import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

// Just return the tree
export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.log('info', `✅️ Running Schematics`);
    context.addTask(new NodePackageInstallTask());
    //tree.create('hello.txt', 'world');
    return tree;
  };
}