import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { PhoneCallIcon } from "lucide-react"

export default function EndCallButton() {

  const call = useCall()

  const {useLocalParticipant} = useCallStateHooks()
  const localParticipant = useLocalParticipant()

  const isOwner = localParticipant && call?.state.createdBy && localParticipant.userId == call?.state.createdBy.id
  const {push} = useRouter()
  if(!isOwner) return null


  return (
    <Button 
    className="bg-red-500 flex-center gap-2 rounded-full"
    onClick= {async()=> {
      await call.endCall()
      push("/")
      }}>
      <PhoneCallIcon size={14} className="-rotate-180" />
      End Call
    </Button>
  )
}
