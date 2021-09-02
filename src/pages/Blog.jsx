import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {add_post, edit_post, remove_post} from "redux/ducks/posts/action_creators";
import PostItem from "components/postItem";

const Blog = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');
    const [editValue, setEditValue] = React.useState('');
    const [selected, selectedPost] = React.useState(null);


    const posts = useSelector(state => state?.post?.posts)
    const postClickHandler = (e) => {
        let text = e?.target?.closest('.wrapper').querySelector('.text').innerText || null
        let itemId = Number(e?.target?.closest('.wrapper')?.attributes?.['data-id']?.value) || null

        if (e?.target.innerText === 'delete') {
            dispatch(remove_post(itemId))
        }
        if (e?.target.innerText === 'edit') {
            selectedPost(itemId)
            setEditValue(text)
        }
    }
    const postEditHandler = () => {
        dispatch(edit_post({
            id: selected,
            text: editValue
        }))
        selectedPost(null)
    }
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
            <button
                onClick={() => {
                    const newPost = {
                        body: value,
                        id: Date.now(),
                        title: "New post",
                        userId: Date.now()
                    }
                    dispatch(add_post(newPost))
                }}>
                Add
            </button>
            {selected ? <div>
                <h2>edit block</h2>
                <input value={editValue} onChange={e => setEditValue(e.target.value)} type="text"/>
                <button onClick={postEditHandler}>apply</button>
            </div> : ''}
            <div onClick={postClickHandler}>
                {posts?.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <PostItem
                                item={item}/>
                            <br/>
                        </React.Fragment>
                    )
                })}
            </div>

        </div>
    );
};

export default Blog;
