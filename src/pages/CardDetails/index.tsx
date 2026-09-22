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

      <div className="max-w-7xl mx-auto p-8 md:flex lg:grid lg:grid-cols-[0.2fr_0.5fr] gap-5 justify-center items-center">

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

        <div className="flex flex-col justify-center items-center gap-5">
          <CardInfoTable
            info={card}
          />

          <SalesInfo
            info={card}
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <RulingInfo
          card={card.name}
          rulings={rulings}
        />
      </div>

    </div>
  )
}