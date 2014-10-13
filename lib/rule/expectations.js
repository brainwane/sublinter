'use strict';

module.exports = defineRules;

var wordcountPhrases = [
    'wordcount',
    'words',
    'word count'
];

function defineRules (linter) {

    // Not mentioning wordcount guidelines
    linter.addRule({
        name: 'Missing Wordcount Guidelines',
        desc: 'If you do not explicitly mention the submission lengths you want, ' +
              'writers cannot know whether to submit short-shorts, novellas, ' +
              'or books for serialization.',
        test: function (spec, result) {
            var wordcountMentions = spec.containsAnyOf(wordcountPhrases);
            if (wordcountMentions.length === 0) {
                result.addNotice(
                    'The announcement does not specify desired wordcount',
                    wordcountMentions
                );
                result.addRealismFailPoints(1);

            }
        }
    });

}
