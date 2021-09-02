import React from 'react';

const PostItem = React.memo(({item}) => {

    return (
        <div data-id={item.id} className={'wrapper'}>
            <h4>{item?.title}</h4>
            <div className={'text'}>{item?.body}</div>
            <button>
                delete
            </button>
            <button>
                edit
            </button>

        </div>
    );
});

export default PostItem;
