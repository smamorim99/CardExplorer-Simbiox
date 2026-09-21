import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { GetCard } from "../../services";
import { RiLoader4Fill } from "react-icons/ri";

export const CardDetails = () => {
  const { name } = useParams();

  const [card, setCard] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const getCardsDetails = async () => {

      if (!name) return;

      try {
        setLoading(true)
        setError("")

        const data = await GetCard(name)

        setCard(data);
      } catch (error) {
        setError("Informações da carta não encontrada");
      } finally {
        setLoading(true)
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

  return (

    <></>
  )
}