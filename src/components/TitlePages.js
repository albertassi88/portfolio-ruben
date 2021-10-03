import '../styles/TitlePages.css';

function TitlePages (props) {
    const { title } = props;
    return (
        <div className="container-title">
            <h1>{title}</h1>
            <h2>{title}</h2>
        </div>
    );
}  

export default TitlePages;