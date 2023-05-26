import './styles/style.css';

const Info = () => {
    return (
        <section id="infoSection" className="info">
            <h2 className="info__title">What's this about?</h2>
            <div className="info_content">
                <p className="info__text">It is the simple quiz game based on the <span className="info__pokemon">PoKéMoN</span> universe and <span className="info__pokemon">PokéAPI</span>. There is the new API-call when "Next Pokemon"-button is clicked. Also this little game features "Easy mode", highlighting correct answer.</p>
            </div>
        </section>
    );
}

export default Info;
