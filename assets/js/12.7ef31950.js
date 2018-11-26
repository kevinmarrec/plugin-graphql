(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{64:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"custom-queries-and-mutations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-queries-and-mutations","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom Queries and Mutations")]),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#model-related-custom-query"}},[t._v("Model related custom query")])]),s("li",[s("a",{attrs:{href:"#model-unrelated-simple-query"}},[t._v("Model unrelated simple query")])]),s("li",[s("a",{attrs:{href:"#model-related-custom-mutation"}},[t._v("Model related custom mutation")])]),s("li",[s("a",{attrs:{href:"#model-unrelated-simple-mutation"}},[t._v("Model unrelated simple mutation")])]),s("li",[s("a",{attrs:{href:"#multiple-or-single-record"}},[t._v("Multiple or single record")])])])]),s("p"),s("p",[t._v("With custom mutations and custom queries we distinguish between model related and model unrelated (simple) custom\nquries/mutations. The difference is that model related queries/mutations always are tied to a model, so Vuex-ORM-GraphQL\nexpected that the query/mutation type is the same as the model. A model related custom mutation "),s("code",[t._v("upvotePost")]),t._v(" is expected\nto be of type "),s("code",[t._v("Post")]),t._v(". To make this even clearer, all model related queries and mutations are called on a specific Model\nor a record of this model.")]),s("p",[t._v("A simple query or simple mutation is not tied to a model. And so Vuex-ORM-GraphQL doesn't expect the result to be of a\nspecific type. Also the return value is not automatically inserted in the Vuex store.")]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),s("p",[t._v("It's not a clean and good solution that the simple queries are also triggered via Vuex action, but currently the only\nway. This might be changed in the future, when we find a better solution.")])]),s("h2",{attrs:{id:"model-related-custom-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-related-custom-query","aria-hidden":"true"}},[t._v("#")]),t._v(" Model related custom query")]),s("p",[t._v("You may sometimes want to send custom GraphQL query. We support this via the "),s("code",[t._v("query")]),t._v(" action. However please notice that\nthe convenienceMethods here are named "),s("code",[t._v("customMutation")]),t._v(" and "),s("code",[t._v("$customMutation")]),t._v(" due to a name conflict with the "),s("code",[t._v("query()")]),t._v("\nmethod Vuex-ORM.")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" post "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Post"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("query")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("first")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" post"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("$customQuery")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'example'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// is the same as")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Post"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("customQuery")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'example'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filter"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" post"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Post"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'query'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'example'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filter"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" post"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("As you can see you have to provide the query name and any further arguments you want to pass. In this case we send\nthe post id, but this could be anything else. Please also notice that "),s("code",[t._v("record.$customQuery")]),t._v(" automatically adds the id\nof the record into the arguments list. The plugin automatically determines if there are multiple records or a single\nrecord is returned by looking in the arguments hash if there is a "),s("code",[t._v("id")]),t._v(" field and respectively setups the query.")]),s("p",[t._v("A model related custom query is always tied to the model, so the plugin expects the return value of the custom query\nis of the model type. In this example that means, that Vuex-ORM-GraphQL expects that the "),s("code",[t._v("example")]),t._v(" query is of type\n"),s("code",[t._v("Post")]),t._v(".")]),s("p",[t._v("This generates the following query:")]),s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("mutation")]),t._v(" Example"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$id")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  example"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token attr-name"}},[t._v("post")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$id")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id\n    userId\n    content\n    title\n\n    user "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id\n      email\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("Variables:")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("42")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("Like for all other operations, all records which are returned replace the respective existing records in the Vuex-ORM\ndatabase.")]),s("p",[t._v("Following fields are allowed:")]),s("ul",[s("li",[s("code",[t._v("name")]),t._v(": Required. The name of the query.")]),s("li",[s("code",[t._v("filter")]),t._v(": Hash map with filters. These are passed as a filter typed variable like in fetch.")]),s("li",[s("code",[t._v("bypassCache")]),t._v(": Whether to bypass the caching.")])]),s("h2",{attrs:{id:"model-unrelated-simple-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-unrelated-simple-query","aria-hidden":"true"}},[t._v("#")]),t._v(" Model unrelated simple query")]),s("p",[t._v("There might be cases when you just want to send a plan graphql query without having this plugin doing magic things.")]),s("p",[t._v("Simple Queries allow to do that. Let's assume we do have a "),s("code",[t._v("status")]),t._v(" query in our GraphQL API which let ask for the\nstatus of all subsystems:")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" query "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`\nquery status {\n  backend\n  smsGateway\n  paypalIntegration\n}`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'entities/simpleQuery'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" query"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" variables"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bypassCache"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("The result contains a hash which is shaped like the request:")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  backend"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  smsGateway"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  paypalIntegration"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("Nothing is inserted in the Vuex store.")]),s("p",[t._v("Following fields are allowed:")]),s("ul",[s("li",[s("code",[t._v("query")]),t._v(": Required. The GraphQL query.")]),s("li",[s("code",[t._v("variables")]),t._v(": Variables to pass")]),s("li",[s("code",[t._v("bypassCache")]),t._v(": Whether to bypass the caching.")])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[t._v("As "),s("code",[t._v("query")]),t._v(" you can also pass a GraphQL AST DocumentNode like it's returned by the "),s("code",[t._v("gql")]),t._v(" function or\nthe "),s("code",[t._v("*.graphql")]),t._v(" webpack loader of "),s("a",{attrs:{href:"https://github.com/apollographql/graphql-tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("graphql-tag")]),t._v(".")])]),s("h2",{attrs:{id:"model-related-custom-mutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-related-custom-mutation","aria-hidden":"true"}},[t._v("#")]),t._v(" Model related custom mutation")]),s("p",[t._v("Along with the CRUD mutations you may want to send custom GraphQL mutations. We support this via the "),s("code",[t._v("mutate")]),t._v(" action:")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" post "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Post"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("query")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("first")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" post"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("$mutate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'upvotePost'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// is the same as")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Post"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("mutate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'upvotePost'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" post"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Post"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'mutate'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'upvotePost'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" post"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("As you can see you have to provide the mutation name and any further arguments you want to pass. In this case we send\nthe post id, but this could be anything else. Please also notice that "),s("code",[t._v("record.$mutate")]),t._v(" automatically adds the id\nof the record into the arguments list. The plugin automatically determines if there are multiple records or a single\nrecord is requests by looking in the arguments hash if there is a "),s("code",[t._v("id")]),t._v(" field and respectively setups the query.")]),s("p",[t._v("A model related custom mutation is always tied to the model, so the plugin expects the return value of the custom query\nis of the model type. In this example that means, that Vuex-ORM-GraphQL expects that the "),s("code",[t._v("upvotePost")]),t._v(" mutation is of type\n"),s("code",[t._v("Post")]),t._v(".")]),s("p",[t._v("This generates the following query:")]),s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("mutation")]),t._v(" UpvotePost"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token variable"}},[t._v("$id")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  upvotePost"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token attr-name"}},[t._v("post")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("$id")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id\n    userId\n    content\n    title\n\n    user "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      id\n      email\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("Variables:")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"id"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("42")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("Like for all other operations, all records which are returned replace the respective existing records in the Vuex-ORM\ndatabase.")]),s("p",[t._v("Following fields are allowed:")]),s("ul",[s("li",[s("code",[t._v("name")]),t._v(": Required. The name of the mutation.")]),s("li",[s("code",[t._v("args")]),t._v(": Hash map with arguments (variables).")])]),s("h2",{attrs:{id:"model-unrelated-simple-mutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-unrelated-simple-mutation","aria-hidden":"true"}},[t._v("#")]),t._v(" Model unrelated simple mutation")]),s("p",[t._v("Like simple custom queries, you can also send simple custom mutations. The action ("),s("code",[t._v("simpleQuery")]),t._v(") stays the same.\nLet's assume we do have a "),s("code",[t._v("sendSms")]),t._v(" mutation (this is a bad example, never setup your app like this please!) in our\nGraphQL API which let us send a SMS.")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" query "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`\nmutation SendSms($to: string!, $text: string!) {\n  sendSms(to: $to, text: $text) {\n    delivered\n  }\n}`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" store"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'entities/simpleMutation'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  query"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  variables"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" to"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'+4912345678'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'GraphQL is awesome!'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("The result contains a hash which is shaped like the request:")]),s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sendSms"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    delivered"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("Nothing is inserted in the Vuex store.")]),s("p",[t._v("Following fields are allowed:")]),s("ul",[s("li",[s("code",[t._v("query")]),t._v(": Required. The GraphQL mutation query.")]),s("li",[s("code",[t._v("variables")]),t._v(": Hash map with variables to pass.")])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[t._v("As "),s("code",[t._v("query")]),t._v(" you can also pass a GraphQL AST DocumentNode like it's returned by the "),s("code",[t._v("gql")]),t._v(" function or\nthe "),s("code",[t._v("*.graphql")]),t._v(" webpack loader of "),s("a",{attrs:{href:"https://github.com/apollographql/graphql-tag",target:"_blank",rel:"noopener noreferrer"}},[t._v("graphql-tag")]),t._v(".")])]),s("h2",{attrs:{id:"multiple-or-single-record"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-or-single-record","aria-hidden":"true"}},[t._v("#")]),t._v(" Multiple or single record")]),s("p",[t._v("Vuex-ORM-GraphQL will determine automatically if a single record or a connection (multiple records) is returned by a\nquery/mutation via checking your GraphQL Schema. How smart is this?")])])}],!1,null,null,null);a.default=e.exports}}]);