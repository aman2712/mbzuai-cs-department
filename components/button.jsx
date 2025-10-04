export default function Button({ children, classes }) {
    return (
        <button className={`bg-white px-4 py-2 w-44 font-aktivgrotesk cursor-pointer hover:bg-white/70 font-semibold border border-white transition duration-300 ${classes} `}>{children}</button>
    )
}