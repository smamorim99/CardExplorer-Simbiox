import type { IHeader } from "./interface"

export const Header = ({title} : IHeader) => {
    return (
        <div className="flex justify-center mt-10 ">
            <span className="text-[2.40rem] font-serif text-transparent bg-clip-text bg-linear-to-r from-yellow-100 to-yellow-600 font-bold">
                    {title}
            </span>
        </div>
    )

}