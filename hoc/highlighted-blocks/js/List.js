'use strict';

const HighlightedVideo = highlightedBlock(Video);
const HighlightedArticle = highlightedBlock(Article);

const List = props => {
    return props.list && props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <HighlightedVideo {...item} />
                );

            case 'article':
                return (
                    <HighlightedArticle {...item} />
                );
        }
    });
};
