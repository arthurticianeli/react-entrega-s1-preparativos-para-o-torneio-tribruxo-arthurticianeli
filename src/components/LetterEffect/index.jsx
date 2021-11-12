const LetterEffect = ({ string }) => {
  return (
    <>
      {string.split("").map(function (char, index) {
        const style = { "animation-delay": 0.5 + index / 10 + "s" };
        return (
          <span key={index} style={style}>
            {char}
          </span>
        );
      })}
    </>
  );
};

export default LetterEffect;
