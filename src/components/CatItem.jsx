const CatItem = ({cat}) => {
    const handleClick = (cat) => {
        alert(`${cat.name}`)
      };

  return (
    <div onClick={() => handleClick(cat)}>
      <img src={cat.image?.url} alt="" width={150}></img>
      <h3>{cat.name}</h3>
      <h3 style={{color: "blue"}}>{cat.origin}</h3>
    </div>
  );
};

export default CatItem;
