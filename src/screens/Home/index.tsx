import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/participant"
import { useState } from "react"

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])

  function handleParticipantAdd() {
    if(participants.includes("Marcelo")) {
      return Alert.alert("Participante ja existe", "Ja existe um participante na lista com esse nome!")
    } else {
      setParticipants(prevState => [...prevState, "participante 2"])
    }
  }

  function handleParticipantRemove(participant: string) {
    Alert.alert("Remover", `Remover participante ${participant}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
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