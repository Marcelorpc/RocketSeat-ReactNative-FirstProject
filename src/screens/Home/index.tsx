import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/participant"

export default function Home() {
  const participants = ['Marcelo', 'Rodrigo', 'Jorge', 'Ana', 'Claudia', 'Ronaldo', 'Jonas', 'Pedro', 'Vanessa']
  function handleParticipantAdd() {
    console.log("adicionei")
  }

  function handleParticipantRemove() {
    console.log("removi")
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
            onRemove={() => handleParticipantRemove}
          />
        )}
      />
    </View>
  )
}