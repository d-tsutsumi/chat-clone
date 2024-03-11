import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://192.168.3.2:8080/v1/graphql',
  documents: ['src/**/*.graphql'],
  generates: {
    'src/types/__generated__/client/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        scalars: {
          uuid: 'string',
          Date: 'string',
        },
      },
    },
    'src/types/__generated__/server/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
