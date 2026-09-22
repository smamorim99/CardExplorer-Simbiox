import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { GetCard, GetCardRulings } from "../../services";
import { RiLoader4Fill } from "react-icons/ri";
import type { IScryfallCard, IScryfallRuling } from "../../services/interface";
import { CardInfoTable } from "../../components/CardInfoTable";
import { SalesInfo } from "../../components/SalesInfoTable";
import { Header } from "../../components/Header";
import { RulingInfo } from "../../components/RulingsInfo";

export const CardDetails = () => {
  const { name } = useParams();

  const [card, setCard] = useState<IScryfallCard | null>(null);
  const [rulings, setRulings] = useState<IScryfallRuling[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const getCardsDetails = async () => {

      if (!name) {
        setError("Nome da carta não informado")
        setLoading(false);
        return
      }

      try {
        setLoading(true)
        setError("")

        const data = await GetCard(name ?? "")

        setCard(data);
        setRulings([])

        if (data.rulings_uri) {
          const rulingData = await GetCardRulings(data.rulings_uri)
          setRulings(rulingData)
        }
      } catch (error) {
        setError("Informações da carta não encontrada");
      } finally {
        setLoading(false)
      }
    }; getCardsDetails();
  }, [name]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-2 border border-white text-white p-5">
        <p> Carrengando carta </p>
        <RiLoader4Fill size={18} className="animate-spin" />
      </div>
    </div>
  )

  if (error || !card) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-2 border border-white text-white p-5">
        <p> {error || "Carta não encontrada"}</p>
        <RiLoader4Fill size={18} className="animate-spin" />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen">
      <div>
        <Header
          title={card.name}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 md:p-8 grid grid-cols-1 md:grid-cols-[minmax(240px,320px)_minmax(0,1fr)] lg:grid-cols-[320px_minmax(0,1fr)] justify-center items-center gap-5">

        <div className="flex justify-center">
          <img
            src={card.image_uris?.border_crop}
            alt={card.name}
            className="
              max-w-[280px]
              aspect-[63/88]
              object-cover
              border-3
              border-black
              rounded-lg
            "
          />

        </div>

        <div className="flex flex-col w-full justify-center items-center gap-5 mt-5 md:mt-0">
          <CardInfoTable
            info={card}
          />

          <SalesInfo
            info={card}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8 sm:px-6 md:px-8">
        <RulingInfo
          card={card.name}
          rulings={rulings}
        />
      </div>

    </div>
  )
}