export function Floc({ floc }) {
    const style = {
        top: `${floc.x}%`,
        left: `${floc.y}%`,
        position: "absolute",
        color: "white",
    };
    return <span style={style}> ❄ </span>;
}
