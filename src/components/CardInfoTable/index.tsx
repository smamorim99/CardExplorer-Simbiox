import type { ICardInfo } from "./interface";

export const CardInfoTable = ({ info }: ICardInfo) => {
    return (
        <div className="w-full max-w-[30rem] overflow-hidden rounded-lg border border-zinc-700">
            <table className="w-full text-sm">
                <tbody className="divide-y divide-zinc-700">

                    <tr>
                        <td className="px-4 py-3 text-zinc-500">
                            Edição
                        </td>

                        <td className="px-4 py-3 text-right font-semibold text-white">
                            {info?.set_name ?? "N/A"}
                        </td>
                    </tr>

                    <tr>
                        <td className="px-4 py-3 text-zinc-500">
                            Raridade
                        </td>

                        <td className="px-4 py-3 text-right font-semibold capitalize text-white">
                            {info?.rarity ?? "N/A"}
                        </td>
                    </tr>

                    <tr>
                        <td className="px-4 py-3 text-zinc-500">
                            Número
                        </td>

                        <td className="px-4 py-3 text-right font-semibold text-white">
                            {info?.collector_number ?? "N/A"}
                        </td>
                    </tr>

                    <tr>
                        <td className="px-4 py-3 text-zinc-500">
                            Artista
                        </td>

                        <td className="px-4 py-3 text-right font-semibold text-white">
                            {info?.artist ?? "N/A"}
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};