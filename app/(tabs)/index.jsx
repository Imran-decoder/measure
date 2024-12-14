// import "././global.css"
import { colorScheme } from 'nativewind';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-xl font-bold bg-white">Hello, Tailwind!</Text>
    </View>
  );
}
