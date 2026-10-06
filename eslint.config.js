import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
export default [{files:['**/*.ts'],languageOptions:{parser,parserOptions:{project:'./tsconfig.json'}},plugins:{'@typescript-eslint':tseslint},rules:{'@typescript-eslint/no-explicit-any':'off','no-unused-vars':'off','@typescript-eslint/no-unused-vars':['error',{argsIgnorePattern':'^_'}]}}];
