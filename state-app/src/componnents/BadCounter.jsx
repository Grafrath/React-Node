export default function BadCounter() {
    let count = 0;

    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    count = count + 1;
                    console.log("count:", count);
                }}
            >
                +1
            </button>
        </div>
    );
}