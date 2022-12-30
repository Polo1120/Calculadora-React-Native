import { Text, View } from 'react-native'
import BotonCalc from '../components/BotonCalc'
import useCalculadora from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'



const CalculadoraScreen = () => {

  const {numero, numeroAnterior,limpiar,armarNumero,positionNegativo,btnDelete,btnDividir, btnMultiplicar,btnRestar,btnSumar,btncalcular} =useCalculadora()


  return (
    <View style={styles.calculadoraConatiner}>

      {
        (numeroAnterior !== "0") && (
        <Text style={styles.resultadopequeno}>{numeroAnterior}</Text> 
        )
      }

      <Text style={styles.resultados}
      numberOfLines={1}
      adjustsFontSizeToFit
      >{numero}</Text>


      <View style={styles.fila}>
        {/* Fila de Botones*/}
        <BotonCalc title='C' color="#9B9B9B" accion={limpiar}/>
        <BotonCalc title='+/-' color='#9B9B9B'  accion={positionNegativo}/>
        <BotonCalc title='Del' color='#9B9B9B' accion={btnDelete}/>
        <BotonCalc title='/' color='#FF9427'  accion={btnDividir}/>
      </View>

      <View style={styles.fila}>
        {/* Fila de Botones*/}
        <BotonCalc title='7' accion={armarNumero}/>
        <BotonCalc title='8' accion={armarNumero}/>
        <BotonCalc title='9' accion={armarNumero}/>
        <BotonCalc title='X' color='#FF9427' accion={btnMultiplicar}/>
      </View>

      <View style={styles.fila}>
        {/* Fila de Botones*/}
        <BotonCalc title='4' accion={armarNumero}/>
        <BotonCalc title='5' accion={armarNumero}/>
        <BotonCalc title='6' accion={armarNumero}/>
        <BotonCalc title='-' color='#FF9427' accion={btnRestar}/>
      </View>

      <View style={styles.fila}>
        {/* Fila de Botones*/}
        <BotonCalc title='1' accion={armarNumero}/>
        <BotonCalc title='2' accion={armarNumero}/>
        <BotonCalc title='3' accion={armarNumero}/>
        <BotonCalc title='+' color='#FF9427' accion={btnSumar}/>
      </View>

      <View style={styles.fila}>
        {/* Fila de Botones*/}
        <BotonCalc title='0'  accion={armarNumero} BotonAncho/>
        <BotonCalc title='.' accion={armarNumero}/>
        <BotonCalc title='=' color='#FF9427' accion={btncalcular}/>
      </View>


    </View>
  )
}

export default CalculadoraScreen
