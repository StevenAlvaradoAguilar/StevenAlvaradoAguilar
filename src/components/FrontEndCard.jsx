import "./imageCards.css";

const FrontEndCard = () => {
    const images = [
        { src: "https://skillicons.dev/icons?i=dotnet&perline=1", alt: ".Net" },
        { src: "https://skillicons.dev/icons?i=react&perline=1", alt: "React" },
        { src: "https://skillicons.dev/icons?i=next&perline=1", alt: "NextJs" },
        { src: "https://skillicons.dev/icons?i=jquery&perline=1", alt: "Jquery" },
        { src: "https://skillicons.dev/icons?i=js&perline=1", alt: "JavaScript" },
        { src: "https://skillicons.dev/icons?i=typescript&perline=1", alt: "TypeScript" },
        { src: "https://skillicons.dev/icons?i=html&perline=1", alt: "HTML" },
        { src: "https://skillicons.dev/icons?i=css&perline=1", alt: "CSS" },
        { src: "https://skillicons.dev/icons?i=materialui&perline=1", alt: "MaterialUI" },
        { src: "https://skillicons.dev/icons?i=bootstrap&perline=1", alt: "Bootstrap" },
        { src: "https://skillicons.dev/icons?i=tailwind&perline=1", alt: "Tailwind" },
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

export default FrontEndCard