import "./Background.css";

function Background() {

  const stars = Array.from({ length: 200 });

  return (
    <div className="background">

      <div className="stars">

        {stars.map((_, index) => (

          <span
            key={index}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />

        ))}

      </div>

    </div>
  );
}

export default Background;