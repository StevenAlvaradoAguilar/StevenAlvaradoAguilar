import "./imageCards.css";

const OtherTechnologies = () => {
    const images = [
        { src: "https://skillicons.dev/icons?i=androidstudio&perline=1", alt: "Android" },
        { src: "https://skillicons.dev/icons?i=c&perline=1", alt: "C" },
        { src: "https://skillicons.dev/icons?i=cs&perline=1", alt: "C#" },
        { src: "https://skillicons.dev/icons?i=cpp&perline=1", alt: "C++" },
        { src: "https://skillicons.dev/icons?i=java&perline=1", alt: "Java" },
        { src: "https://skillicons.dev/icons?i=python&perline=1", alt: "Python" },
        { src: "https://skillicons.dev/icons?i=azure&perline=1", alt: "Azure" },
        { src: "https://skillicons.dev/icons?i=git&perline=1", alt: "Git" },
        { src: "https://skillicons.dev/icons?i=github&perline=1", alt: "Github" },
        { src: "https://skillicons.dev/icons?i=githubactions&perline=1", alt: "Github Actions" },
        { src: "https://skillicons.dev/icons?i=postman&perline=1", alt: "Postman" },
        { src: "https://skillicons.dev/icons?i=solidity&perline=1", alt: "Solidity" },
        { src: "https://skillicons.dev/icons?i=netlify&perline=1", alt: "Netlify" },
        { src: "https://skillicons.dev/icons?i=vscode&perline=1", alt: "VSCode" },
        { src: "https://skillicons.dev/icons?i=bash&perline=1", alt: "Bash" },
        { src: "https://skillicons.dev/icons?i=linux&perline=1", alt: "Linux" },
        { src: "https://skillicons.dev/icons?i=aws&perline=1", alt: "AWS" }
    ];

    const firstSetOfImages = images.slice(0, 10);
    const secondSetOfImages = images.slice(10);

    return (
        <>
            {/* Renderiza el primer conjunto de imágenes */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {firstSetOfImages.map((image, index) => (
                    <div key={index} style={{ position: 'relative', marginRight: '20px', marginBottom: '20px' }}>
                        <div style={{ position: 'relative' }}>
                                <img
                                    src={image.src}
                                    loading="lazy"
                                    width={80}
                                    alt={image.alt}
                                    className="image"
                                />
                                <p 
                                    className="p"
                                    style={{ position: 'relative', bottom: '0', width: '100%', textAlign: 'center', background: 'rgba(0, 0, 0, 0.5)', padding: '1px 0', margin: '0', color: 'white' }}
                                >{image.alt}</p>
                            </div>
                    </div>
                ))}
            </div>
            {/* Renderiza el segundo conjunto de imágenes si existen */}
            {secondSetOfImages.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {secondSetOfImages.map((image, index) => (
                        <div key={index} style={{ position: 'relative', marginRight: '20px', marginBottom: '20px' }}>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src={image.src}
                                    loading="lazy"
                                    width={80}
                                    alt={image.alt}
                                    className="image"
                                />
                                <p 
                                    className="p"
                                    style={{ position: 'relative', bottom: '0', width: '100%', textAlign: 'center', background: 'rgba(0, 0, 0, 0.5)', padding: '1px 0', margin: '0', color: 'white' }}
                                >{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default OtherTechnologies