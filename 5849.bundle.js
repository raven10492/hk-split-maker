(self.webpackChunkhk_split_maker=self.webpackChunkhk_split_maker||[]).push([[5849],{25849:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.dockerfile',\n    variable: /\\${?[\\w]+}?/,\n    tokenizer: {\n        root: [\n            { include: '@whitespace' },\n            { include: '@comment' },\n            [/(ONBUILD)(\\s+)/, ['keyword', '']],\n            [/(ENV)(\\s+)([\\w]+)/, ['keyword', '', { token: 'variable', next: '@arguments' }]],\n            [\n                /(FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|ARG|VOLUME|LABEL|USER|WORKDIR|COPY|CMD|STOPSIGNAL|SHELL|HEALTHCHECK|ENTRYPOINT)/,\n                { token: 'keyword', next: '@arguments' }\n            ]\n        ],\n        arguments: [\n            { include: '@whitespace' },\n            { include: '@strings' },\n            [\n                /(@variable)/,\n                {\n                    cases: {\n                        '@eos': { token: 'variable', next: '@popall' },\n                        '@default': 'variable'\n                    }\n                }\n            ],\n            [\n                /\\\\/,\n                {\n                    cases: {\n                        '@eos': '',\n                        '@default': ''\n                    }\n                }\n            ],\n            [\n                /./,\n                {\n                    cases: {\n                        '@eos': { token: '', next: '@popall' },\n                        '@default': ''\n                    }\n                }\n            ]\n        ],\n        // Deal with white space, including comments\n        whitespace: [\n            [\n                /\\s+/,\n                {\n                    cases: {\n                        '@eos': { token: '', next: '@popall' },\n                        '@default': ''\n                    }\n                }\n            ]\n        ],\n        comment: [[/(^#.*$)/, 'comment', '@popall']],\n        // Recognize strings, including those broken across lines with \\ (but not without)\n        strings: [\n            [/\\\\'$/, '', '@popall'],\n            [/\\\\'/, ''],\n            [/'$/, 'string', '@popall'],\n            [/'/, 'string', '@stringBody'],\n            [/\"$/, 'string', '@popall'],\n            [/\"/, 'string', '@dblStringBody']\n        ],\n        stringBody: [\n            [\n                /[^\\\\\\$']/,\n                {\n                    cases: {\n                        '@eos': { token: 'string', next: '@popall' },\n                        '@default': 'string'\n                    }\n                }\n            ],\n            [/\\\\./, 'string.escape'],\n            [/'$/, 'string', '@popall'],\n            [/'/, 'string', '@pop'],\n            [/(@variable)/, 'variable'],\n            [/\\\\$/, 'string'],\n            [/$/, 'string', '@popall']\n        ],\n        dblStringBody: [\n            [\n                /[^\\\\\\$\"]/,\n                {\n                    cases: {\n                        '@eos': { token: 'string', next: '@popall' },\n                        '@default': 'string'\n                    }\n                }\n            ],\n            [/\\\\./, 'string.escape'],\n            [/\"$/, 'string', '@popall'],\n            [/\"/, 'string', '@pop'],\n            [/(@variable)/, 'variable'],\n            [/\\\\$/, 'string'],\n            [/$/, 'string', '@popall']\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oay1zcGxpdC1tYWtlci8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvZG9ja2VyZmlsZS9kb2NrZXJmaWxlLmpzPzBlY2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxTQUFTLFlBQVksR0FBRztBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLHdCQUF3QjtBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBLG1EQUFtRCx3Q0FBd0M7QUFDM0Y7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHNCQUFzQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQ0FBcUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw2QkFBNkI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw2QkFBNkI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxtQ0FBbUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUNBQW1DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjI1ODQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5leHBvcnQgdmFyIGNvbmYgPSB7XG4gICAgYnJhY2tldHM6IFtcbiAgICAgICAgWyd7JywgJ30nXSxcbiAgICAgICAgWydbJywgJ10nXSxcbiAgICAgICAgWycoJywgJyknXVxuICAgIF0sXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XG4gICAgXSxcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgICBdXG59O1xuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxuICAgIHRva2VuUG9zdGZpeDogJy5kb2NrZXJmaWxlJyxcbiAgICB2YXJpYWJsZTogL1xcJHs/W1xcd10rfT8vLFxuICAgIHRva2VuaXplcjoge1xuICAgICAgICByb290OiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0Bjb21tZW50JyB9LFxuICAgICAgICAgICAgWy8oT05CVUlMRCkoXFxzKykvLCBbJ2tleXdvcmQnLCAnJ11dLFxuICAgICAgICAgICAgWy8oRU5WKShcXHMrKShbXFx3XSspLywgWydrZXl3b3JkJywgJycsIHsgdG9rZW46ICd2YXJpYWJsZScsIG5leHQ6ICdAYXJndW1lbnRzJyB9XV0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLyhGUk9NfE1BSU5UQUlORVJ8UlVOfEVYUE9TRXxFTlZ8QUREfEFSR3xWT0xVTUV8TEFCRUx8VVNFUnxXT1JLRElSfENPUFl8Q01EfFNUT1BTSUdOQUx8U0hFTEx8SEVBTFRIQ0hFQ0t8RU5UUllQT0lOVCkvLFxuICAgICAgICAgICAgICAgIHsgdG9rZW46ICdrZXl3b3JkJywgbmV4dDogJ0Bhcmd1bWVudHMnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgYXJndW1lbnRzOiBbXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAd2hpdGVzcGFjZScgfSxcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oQHZhcmlhYmxlKS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAndmFyaWFibGUnLCBuZXh0OiAnQHBvcGFsbCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICd2YXJpYWJsZSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xcXFwvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvLi8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnJywgbmV4dDogJ0Bwb3BhbGwnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICAvLyBEZWFsIHdpdGggd2hpdGUgc3BhY2UsIGluY2x1ZGluZyBjb21tZW50c1xuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgL1xccysvLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJycsIG5leHQ6ICdAcG9wYWxsJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1svKF4jLiokKS8sICdjb21tZW50JywgJ0Bwb3BhbGwnXV0sXG4gICAgICAgIC8vIFJlY29nbml6ZSBzdHJpbmdzLCBpbmNsdWRpbmcgdGhvc2UgYnJva2VuIGFjcm9zcyBsaW5lcyB3aXRoIFxcIChidXQgbm90IHdpdGhvdXQpXG4gICAgICAgIHN0cmluZ3M6IFtcbiAgICAgICAgICAgIFsvXFxcXCckLywgJycsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbL1xcXFwnLywgJyddLFxuICAgICAgICAgICAgWy8nJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAc3RyaW5nQm9keSddLFxuICAgICAgICAgICAgWy9cIiQvLCAnc3RyaW5nJywgJ0Bwb3BhbGwnXSxcbiAgICAgICAgICAgIFsvXCIvLCAnc3RyaW5nJywgJ0BkYmxTdHJpbmdCb2R5J11cbiAgICAgICAgXSxcbiAgICAgICAgc3RyaW5nQm9keTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bXlxcXFxcXCQnXS8sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ0Blb3MnOiB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3BhbGwnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvXFxcXC4vLCAnc3RyaW5nLmVzY2FwZSddLFxuICAgICAgICAgICAgWy8nJC8sICdzdHJpbmcnLCAnQHBvcGFsbCddLFxuICAgICAgICAgICAgWy8nLywgJ3N0cmluZycsICdAcG9wJ10sXG4gICAgICAgICAgICBbLyhAdmFyaWFibGUpLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8kLywgJ3N0cmluZycsICdAcG9wYWxsJ11cbiAgICAgICAgXSxcbiAgICAgICAgZGJsU3RyaW5nQm9keTogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC9bXlxcXFxcXCRcIl0vLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogeyB0b2tlbjogJ3N0cmluZycsIG5leHQ6ICdAcG9wYWxsJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbL1xcXFwuLywgJ3N0cmluZy5lc2NhcGUnXSxcbiAgICAgICAgICAgIFsvXCIkLywgJ3N0cmluZycsICdAcG9wYWxsJ10sXG4gICAgICAgICAgICBbL1wiLywgJ3N0cmluZycsICdAcG9wJ10sXG4gICAgICAgICAgICBbLyhAdmFyaWFibGUpLywgJ3ZhcmlhYmxlJ10sXG4gICAgICAgICAgICBbL1xcXFwkLywgJ3N0cmluZyddLFxuICAgICAgICAgICAgWy8kLywgJ3N0cmluZycsICdAcG9wYWxsJ11cbiAgICAgICAgXVxuICAgIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25849\n")}}]);