import React, { FC } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

interface CardProps {
  item: any
  onPress: () => void
  computeDetails: (item: any) => string
}

const Card: FC<CardProps> = ({ item, onPress, computeDetails }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{`ID: ${item.id}`}</Text>
      <Text style={styles.title}>{`Title: ${item.title}`}</Text>
      <Text style={styles.details}>{computeDetails(item)}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
  },
})

export default Card
