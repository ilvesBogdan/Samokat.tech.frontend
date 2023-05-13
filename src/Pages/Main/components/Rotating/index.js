import './index.css';

const Rotating = (props) => {
    const visible = props.visible;

    return (
        <div style={{height: 0}} className={`rotating ${visible ? 'rotating--invisible' : 'rotating--visible'}`}>
            <div className='rotating__sun'/>
        </div>
    );
}

export default Rotating;