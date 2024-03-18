import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/participant"
import { ChangeEvent, useState } from "react"

export default function Home() {
  const [participantNameInput, setParticipantNameInput] = useState("")

  const [participants, setParticipants] = useState<string[]>([])

  function handleParticipantAdd() {
    if(participants.includes(participantNameInput)) {
      return Alert.alert("Participante ja existe", "Ja existe um participante na lista com esse nome!")
    } else {
      setParticipants(prevState => [...prevState, participantNameInput])
      setParticipantNameInput('')
    }
  }

  function handleParticipantRemove(participantName: string) {
    Alert.alert("Remover", `Remover participante ${participantName}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== participantName))
      },
      {
        text: 'Nao',
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2024
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do Participante"
          placeholderTextColor='#ffffff'
          keyboardType="default"
          onChangeText={setParticipantNameInput}
          value={participantNameInput}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>A Lista Esta Vazia</Text>
        )}
        renderItem={({item}) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
      />
    </View>
  )
}