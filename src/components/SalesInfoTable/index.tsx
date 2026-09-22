import type { ICardInfo } from "./interface"

export const SalesInfo = ({ info }: ICardInfo) => {

    console.log(info)
    return (
        <div className="overflow-hidden w-full max-w-[30rem] rounded-lg border border-zinc-700">
    <table className="w-full text-sm">
        <thead className="bg-zinc-800">
            <tr>
                <th className="px-4 py-3 text-left text-zinc-400">
                    Moeda
                </th>
                <th className="px-4 py-3 text-right text-zinc-400">
                    Preço
                </th>
            </tr>
        </thead>

        <tbody className="divide-y divide-zinc-700">
            <tr>
                <td className="px-4 py-3 text-zinc-500">
                    USD
                </td>

                <td className="px-4 py-3 text-right text-white">
                    {info?.prices.usd
                        ? `$ ${info.prices.usd}`
                        : "N/A"}
                </td>
            </tr>

            <tr>
                <td className="px-4 py-3 text-zinc-500">
                    USD Foil
                </td>

                <td className="px-4 py-3 text-right text-white">
                    {info?.prices.usd_foil
                        ? `$ ${info.prices.usd_foil}`
                        : "N/A"}
                </td>
            </tr>

            <tr>
                <td className="px-4 py-3 text-zinc-500">
                    EUR
                </td>

                <td className="px-4 py-3 text-right text-white">
                    {info?.prices.eur
                        ? `€ ${info.prices.eur}`
                        : "N/A"}
                </td>
            </tr>
        </tbody>
    </table>
</div>
    )
}