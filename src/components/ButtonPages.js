import '../styles/ButtonPages.css';

function ButtonPages(props) {
    const {type, title} = props;
    return (
        <div className="container-button" >
            <input                
                type={type} 
                value={title}
            />
        </div>
    );
}

export default ButtonPages;