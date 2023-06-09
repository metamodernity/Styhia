import s from './Poem.module.css'
import PoemBody from './PoemBody/PoemBody';
import PoemTitle from './PoemTitle/PoemTitle';


const Poem = (props) => {


return (
        <div className={s.componentWrapper}>
            <PoemTitle poemTitle = {props.poemTitle}/>
            <PoemBody poemText = {props.poemText}/>
        </div>
    );
};

export default Poem;