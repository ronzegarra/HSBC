import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import theme from '../../theme/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import MasterLogin from '../login/MasterLogin';

import Welcome from '../login/Welcome';
import Question from '../login/Question';

import Test from './Test';
import Testt from './Testt';
import Logoff from './Logoff';

import AlertsHome from '../alerts/AlertsHome';
import AlertsConfiguration from '../alerts/AlertsConfiguration';

import FavoriteHome from '../favorite/FavoriteHome';
import NewFavorite from '../favorite/NewFavorite';

import MoreView from '../more/MoreView';
import PendingAuthorizationHome from '../more/pendingAuthorization/PendingAuthorizationHome';
import PendingAuthorizationSecond from '../more/pendingAuthorization/PendingAuthorizationSecond';
import PendingAuthorizationThird from '../more/pendingAuthorization/PendingAuthorizationThird';

import CheckbookFirst from '../more/checkbooks/CheckbookFirst';
import CheckbookSecond from '../more/checkbooks/CheckbookSecond';
import CheckbookThird from '../more/checkbooks/CheckbookThird';
import CheckbookFourth from '../more/checkbooks/CheckbookFourth';

import BranchOffices from '../more/branchOffices/BranchOffices';

import Contactless from '../more/contactless/Contactless';


import PersonalData from '../more/personalOptions/PersonalData';
import ChangeProfile from '../more/personalOptions/ChangeProfile';
import MessageBank from '../more/personalOptions/MessageBank';
import LoginMethod from '../more/loginMethods/LoginMethod';


import ProductHome from '../product/ProductHome';
import ProductMov from '../product/ProductMov';
import ProductLoan from '../product/ProductLoan';
import ProductCreditCard from '../product/ProductCreditCard';
import ModalSearchProduct from '../product/ModalSearchProduct';
import ProductDPF from '../product/ProductDPF';

import TransferenceHome from '../transference/TransferenceHome';
import TransferenceLocalFirst from '../transference/transferenceLocal/TransferenceLocalFirst';
import TransferenceLocalSecond from '../transference/transferenceLocal/TransferenceLocalSecond';
import TransferenceLocalThird from '../transference/transferenceLocal/TransferenceLocalThird';
import TransferenceLocalFourth from '../transference/transferenceLocal/TransferenceLocalFourth';
import TransferenceLocalFifth from '../transference/transferenceLocal/TransferenceLocalFifth';
import TransferenceLocalAmountController from '../transference/transferenceLocal/TransferenceLocalAmountController';

import TransferenceThirdFirst from '../transference/transferenceThird/TransferenceThirdFirst';
import TransferenceThirdSecond from '../transference/transferenceThird/TransferenceThirdSecond';
import TransferenceThirdThird from '../transference/transferenceThird/TransferenceThirdThird';
import TransferenceThirdFourth from '../transference/transferenceThird/TransferenceThirdFourth';
import TransferenceThirdFifth from '../transference/transferenceThird/TransferenceThirdFifth';
import TransferenceThirdNewCreditAccount from '../transference/transferenceThird/NewCreditAccount';
import TransferenceThirdAmountController from '../transference/transferenceThird/TransferenceThirdAmountController';

import TransferenceOtherBanksFirst from '../transference/transferenceOthersBanks/TransferenceOtherBanksFirst';
import TransferenceOtherBanksSecond from '../transference/transferenceOthersBanks/TransferenceOtherBanksSecond';
import TransferenceOtherBanksThird from '../transference/transferenceOthersBanks/TransferenceOtherBanksThird';
import TransferenceOtherBanksFourth from '../transference/transferenceOthersBanks/TransferenceOtherBanksFourth';
import TransferenceOthersBanksNewCreditAccount from '../transference/transferenceOthersBanks/NewCreditAccount';
import TransferenceOtherBanksAmountController from '../transference/transferenceOthersBanks/TransferenceOtherBanksAmountController';

import TransferenceInternationalFirst from '../transference/transferenceInternational/TransferenceInternationalFirst';
import TransferenceInternationalSecond from '../transference/transferenceInternational/TransferenceInternationalSecond';
import TransferenceInternationalThird from '../transference/transferenceInternational/TransferenceInternationalThird';
import TransferenceInternationalFourth from '../transference/transferenceInternational/TransferenceInternationalFourth';

import TransferenceInternationalNewCreditAccount from '../transference/transferenceInternational/NewCreditAccount';

/*import TransferenceInternationalThird from '../transference/transferenceInternational/TransferenceInternationalThird'
import TransferenceInternationalFourth from '../transference/transferenceInternational/TransferenceInternationalFourth' */

import PayHome from '../pay/PayHome';
import PayTypeHome from '../pay/PayTypeHome';
import PaySummary from '../pay/PaySummary';

import PayCardsFirst from '../pay/payCards/PayCardsFirst';
import PayCardsSecond from '../pay/payCards/PayCardsSecond';
import PayCardsThird from '../pay/payCards/PayCardsThird';
import PayCardsFourth from '../pay/payCards/PayCardsFourth';
import PayCardsFifth from '../pay/payCards/PayCardsFifth';
import PayCardSixth from '../pay/payCards/PayCardSixth';
import PayCardsAmountController from '../pay/payCards/PayCardsAmountController';
import PayCardsNumberController from '../pay/payCards/PayCardsNumberController';
import PayCardsNumberConfirmation from '../pay/payCards/PayCardsNumberConfirmation';

import PayLoansFirst from '../pay/payLoans/PayLoansFirst';
import PayLoansSecond from '../pay/payLoans/PayLoansSecond';
import PayLoansThird from '../pay/payLoans/PayLoansThird';
import PayLoansFourth from '../pay/payLoans/PayLoansFourth';
import PayLoansFifth from '../pay/payLoans/PayLoansFifth';
import PayLoansSixth from '../pay/payLoans/PayLoansSixth';
import PayLoansAmountController from '../pay/payLoans/PayLoansAmountController';

import PayServicesFirst from '../pay/payServices/PayServicesFirst';
import PayServicesSecond from '../pay/payServices/PayServicesSecond';
import PayServicesThird from '../pay/payServices/PayServicesThird';
import PayServicesFourth from '../pay/payServices/PayServicesFourth';
import PayServicesFifth from '../pay/payServices/PayServicesFifth';

var indexs = [];
var states = [];

const Tools = {
  setIndex: function setIndex(router, index) {
    let exists = false;
    for (var i = 0; i < indexs.length; i++) {
      if (indexs[i].router == router) {
        indexs[i].index = index;
        return;
      }
    }
    indexs.push({ router, index });
  },

  getIndex: function getIndex(router) {
    for (var i = 0; i < indexs.length; i++) {
      if (indexs[i].router == router) {
        return indexs[i].index;
      }
    }
    return 0;
  },

  setState: function setState(router, state) {
    for (var i = 0; i < states.length; i++) {
      if (states[i].router == router) {
        states[i].state = state;
        return;
      }
    }
    states.push({ router, state });
  },

  getState: function getState(router) {
    for (var i = 0; i < states.length; i++) {
      if (states[i].router == router) return states[i].state;
    }
    return null;
  }
};

const styleHeaderRightButton = { marginRight: 10, width: 20, height: 20 };
const styleHeaderLeftButton = { marginLeft: 10, width: 20, height: 20 };
const headerTitleStyle = {
  flex: 1,
  color: '#DF2836',
  fontSize: 14,
  textAlign: 'center',
  alignSelf: 'center'
};
const iconTabBar = { width: 25, height: 25 };

class BackButton extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
  }

  back() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <TouchableOpacity style={styleHeaderLeftButton} onPress={this.back}>
        <Image
          source={require('../../img/RecursosHSBC/Common/back.png')}
          resizeMode={'contain'}
          style={{ flex: 1, width: undefined }}
        />
      </TouchableOpacity>
    );
  }
}

class AlertButton extends React.Component {
  constructor(props) {
    super(props);

    this.goAlert = this.goAlert.bind(this);
  }

  goAlert() {
    this.props.navigation.navigate('Alertas');
  }

  render() {
    return (
      <TouchableOpacity style={styleHeaderRightButton} onPress={this.goAlert}>
        <Image
          source={require('../../img/RecursosHSBC/Products/message.png')}
          resizeMode={'contain'}
          style={{ flex: 1, width: undefined }}
        />
      </TouchableOpacity>
    );
  }
}

class AlertConfigurationButton extends React.Component {
  goAlert = () => {
    this.props.navigation.navigate('AlertasConfiguracion');
  }

  render() {
    return (
      <TouchableOpacity style={styleHeaderRightButton} onPress={this.goAlert}>
        <Image
          source={require('../../img/RecursosHSBC/Products/menu.png')}
          resizeMode={'contain'}
          style={{ flex: 1, width: undefined }}
        />
      </TouchableOpacity>
    );
  }
}

class SearchProduct extends React.Component {
  constructor(props) {
    super(props);
    //this.goAlert=this.goAlert.bind(this)
    this.state = {
      showModal: false
    };
    this.openSearchModal = this.openSearchModal.bind(this);
    this.closeSearchModal = this.closeSearchModal.bind(this);
  }

  openSearchModal(value) {
    //this.props.navigation.navigate('Nada');
    //this.setState({showModal:})

    console.warn(value);

    value
      ? this.setState({ showModal: false })
      : this.setState({ showModal: true });
  }

  closeSearchModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <View>
        <View style={{ paddingLeft: 10 }}>
          <TouchableOpacity
            style={styleHeaderRightButton}
            onPress={() => this.openSearchModal(this.state.showModal)}
          >
            <Image
              source={require('../../img/RecursosHSBC/Products/search.png')}
              resizeMode={'contain'}
              style={{ flex: 1, width: undefined }}
            />
          </TouchableOpacity>
        </View>
        {this.state.showModal ? (
          <ModalSearchProduct closeSearchModal={this.closeSearchModal} />
        ) : null}
      </View>
    );
  }
}

class FavButton extends React.Component {
  constructor(props) {
    super(props);

    this.goFav = this.goFav.bind(this);
  }

  goFav() {
    this.props.navigation.navigate('FavoritoNuevo');
  }

  render() {
    return <TouchableOpacity style={styleHeaderLeftButton} onPress={this.goFav}>
        <Image source={require('../../img/RecursosHSBC/Favorites/add.png')} resizeMode={'stretch'} style={{ flex: 1, width: undefined }} />
      </TouchableOpacity>;
  }
}

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 400,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;
      const width = layout.initWidth;

      return {
        opacity: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0, 1, 0]
        }),
        transform: [
          {
            translateX: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [width, 0, -width]
            })
          }
        ]
      };
    },
    headerTitleInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      return {
        opacity: position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0, 1, 0]
        }),
        transform: [
          {
            translateX: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [50, 0, -100]
            })
          }
        ]
      };
    }
  };
};

/*const prevGetStateForActionHomeStack = HomeStack.router.getStateForAction;
HomeStack.router.getStateForAction = (action, state) => {
    if (state) {
      let len=state.routes.length - 1
      Tools.setIndex('HomeStack',state.routes.length)
      Tools.setState('HomeStack',action.routeName)

      /*if(action.type === 'ReplaceCurrentScreen'){
        const routes = state.routes.slice(0, len);
        routes.push(action);
        return {
          ...state,
          routes,
          index: routes.length - 1,
        };
      }
    }
    return prevGetStateForActionHomeStack(action, state);
}*/

const headerStyle = {
  height: 40,
  backgroundColor: theme.colorHeader
};

const headerStyleNoShadow = {
  height: 40,
  backgroundColor: theme.colorHeader,
  shadowOpacity: 0,
  shadowOffset: {
    height: 0
  },
  shadowRadius: 0,
  elevation: 0
};

const FavStack = StackNavigator(
  {
    Favoritos: {
      screen: FavoriteHome,
      navigationOptions: ({ navigation }) => ({
        title: 'Favoritos',
        headerTitleStyle: headerTitleStyle,
        //headerLeft:<BackButton navigation={navigation}/>,
        headerLeft: <FavButton navigation={navigation} />,
        headerRight: <View />,
        headerStyle: headerStyleNoShadow
      })
    },
    FavoritoNuevo: {
      screen: NewFavorite,
      navigationOptions: ({ navigation }) => ({
        title: 'Favoritos',
        headerTitleStyle: headerTitleStyle,
        //headerLeft:<BackButton navigation={navigation}/>,
        headerLeft: <View />,
        headerRight: <View />,
        headerStyle: headerStyleNoShadow
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    headerMode: 'float',
    mode: 'card',
    navigationOptions: params => ({
      tabBarLabel: 'Favoritos',
      gesturesEnabled: true,
      gesturesDirection: 'inverted'
    }),
    transitionConfig
  }
);

const ProdStack = StackNavigator(
  {
    Productos: {
      screen: ProductHome,
      navigationOptions: ({ navigation }) => ({
        title: 'Productos',
        headerTitleStyle: headerTitleStyle,
        headerRight: <AlertButton navigation={navigation} />,
        headerLeft: <SearchProduct />,
        headerStyle: headerStyleNoShadow
      })
    },
    //AlertsHome
    Alertas: {
      screen: AlertsHome,
      navigationOptions: ({ navigation }) => ({
        title: 'Alertas',
        headerTitleStyle: headerTitleStyle,
        headerLeft: <BackButton navigation={navigation} />,
        headerRight: <AlertConfigurationButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    AlertasConfiguracion: {
      screen: AlertsConfiguration,
      navigationOptions: ({ navigation }) => ({
        title: 'Alertas',
        headerTitleStyle: headerTitleStyle,
        headerLeft: <BackButton navigation={navigation} />,
        headerRight: <View />,
        headerStyle: headerStyleNoShadow
      })
    },

    Movimientos: {
      screen: ProductMov,
      navigationOptions: ({ navigation }) => ({
        title: 'Cuenta Corriente',
        headerTitleStyle: headerTitleStyle,
        headerLeft: <BackButton navigation={navigation} />,
        headerRight: <View />,
        headerStyle: headerStyleNoShadow
      })
    },
    TarjetasCredito: {
      screen: ProductCreditCard,
      navigationOptions: ({ navigation }) => ({
        title: 'Tarjeta de Crédito',
        headerTitleStyle: headerTitleStyle,
        headerLeft: <BackButton navigation={navigation} />,
        headerRight: <View />,
        headerStyle: headerStyleNoShadow
      })
    },
    Prestamos: {
      screen: ProductLoan,
      navigationOptions: ({ navigation }) => ({
        title: 'Préstamo',
        headerTitleStyle: headerTitleStyle,
        headerLeft: <BackButton navigation={navigation} />,
        headerRight: <View />,
        headerStyle: headerStyleNoShadow
      })
    },
    //ProductDPF
    DPF: {
      screen: ProductDPF,
      navigationOptions: ({ navigation }) => ({
        title: 'Depósito a Plazo Fijo',
        headerTitleStyle: headerTitleStyle,
        headerLeft: <BackButton navigation={navigation} />,
        headerRight: <View />,
        headerStyle: headerStyleNoShadow
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    headerMode: 'float',
    mode: 'card',
    navigationOptions: params => ({
      tabBarLabel: 'Productos',
      gesturesEnabled: true,
      gesturesDirection: 'inverted'
    }),
    transitionConfig
  }
);

const TranStack = StackNavigator(
  {
    Transferir: {
      screen: TransferenceHome,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencias',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },
    TransferenciasPropias: {
      screen: TransferenceLocalFirst,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencias a Cuentas Propias',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    TransferenciasPropias_Segunda: {
      screen: TransferenceLocalSecond,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencias a Cuentas Propias',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    TransferenciasPropias_Tercera: {
      screen: TransferenceLocalThird,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencias a Cuentas Propias',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    TransferenciasPropias_Cuarta: {
      screen: TransferenceLocalFourth,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencias a Cuentas Propias',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    TransferenciasPropias_Quinta: {
      screen: TransferenceLocalFifth,
      navigationOptions: ({ navigation }) => ({
        title: 'Ticket',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //TransferenceLocalAmountController

    TransferenciasPropias_ControladorMonto: {
      screen: TransferenceLocalAmountController,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencias a Cuentas Propias',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    TransferenciasTerceros: {
      screen: TransferenceThirdFirst,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia a Terceros',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //TransferenceThirdSecond
    TransferenciasTerceros_Segunda: {
      screen: TransferenceThirdSecond,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia a Terceros',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //TransferenceThirdThird
    TransferenciasTerceros_Tercera: {
      screen: TransferenceThirdThird,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia a Terceros',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //TransferenceThirdFourth
    TransferenciasTerceros_Cuarta: {
      screen: TransferenceThirdFourth,
      navigationOptions: ({ navigation }) => ({
        title: 'Confirmación Transferencias',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //TransferenceThirdFifth
    TransferenciasTerceros_Quinta: {
      screen: TransferenceThirdFifth,
      navigationOptions: ({ navigation }) => ({
        title: 'Ticket',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    TransferenciasTerceros_NuevaCuentaCredito: {
      screen: TransferenceThirdNewCreditAccount,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia a Terceros',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //TransferenceThirdAmountController
    TransferenciasTerceros_ControladorMonto: {
      screen: TransferenceThirdAmountController,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencias a Terceros',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    TransferenciasOtrosBancos: {
      screen: TransferenceOtherBanksFirst,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia a Otros Bancos',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //TransferenceOtherBanksSecond
    TransferenciasOtrosBancos_Segunda: {
      screen: TransferenceOtherBanksSecond,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia a Otros Bancos',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //TransferenceOtherBanksThird
    TransferenciasOtrosBancos_Tercera: {
      screen: TransferenceOtherBanksThird,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia a Otros Bancos',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //TransferenceOtherBanksFourth
    TransferenciasOtrosBancos_Cuarta: {
      screen: TransferenceOtherBanksFourth,
      navigationOptions: ({ navigation }) => ({
        title: 'Ticket',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //TransferenceOthersBanksNewCreditAccount

    TransferenciasOtrosBancos_NuevaCuentaCredito: {
      screen: TransferenceOthersBanksNewCreditAccount,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia a Otros Bancos',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //TransferenceOtherBanksAmountController
    TransferenciasOtrosBancos_ControladorMonto: {
      screen: TransferenceOtherBanksAmountController,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia a Otros Bancos',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //TransferenceInternationalFirst

    TransferenciasInternacionales: {
      screen: TransferenceInternationalFirst,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia Internacional',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //TransferenceInternationalSecond
    TransferenciasInternacionales_Segunda: {
      screen: TransferenceInternationalSecond,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia Internacional',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //TransferenceInternationalThird
    TransferenciasInternacionales_Tercera: {
      screen: TransferenceInternationalThird,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia Internacional',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    TransferenciasInternacionales_Cuarta: {
      screen: TransferenceInternationalFourth,
      navigationOptions: ({ navigation }) => ({
        title: 'Ticket',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //TransferenceInternationalNewCreditAccount
    TransferenciasInternacionales_NuevaCuentaCredito: {
      screen: TransferenceInternationalNewCreditAccount,
      navigationOptions: ({ navigation }) => ({
        title: 'Transferencia Internacional',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    headerMode: 'float',
    mode: 'card',
    navigationOptions: params => ({
      tabBarLabel: 'Transferir',
      gesturesEnabled: true,
      gesturesDirection: 'inverted'
    }),
    transitionConfig
  }
);

const PayStack = StackNavigator(
  {
    Pagar: {
      screen: PayHome,
      navigationOptions: {
        title: 'Pagar',
        headerTitleStyle: headerTitleStyle,
        headerStyle: headerStyleNoShadow
      }
    },
    Pagar_Tipo: {
      screen: PayTypeHome,
      navigationOptions: ({ navigation }) => ({
        title: 'Pagar',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PaySummary
    Pagar_Resumen: {
      screen: PaySummary,
      navigationOptions: ({ navigation }) => ({
        title: 'Pagar',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PayCardsFirst
    PagarTarjeta_Primera: {
      screen: PayCardsFirst,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Tarjetas',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //PayCardsSecond
    PagarTarjeta_Segunda: {
      screen: PayCardsSecond,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Tarjetas',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //PayCardsThird
    PagarTarjeta_Tercera: {
      screen: PayCardsThird,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Tarjetas',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //PayCardsFourth
    PagarTarjeta_Cuarta: {
      screen: PayCardsFourth,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Tarjetas',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //PayCardsFifth
    PagarTarjeta_Quinta: {
      screen: PayCardsFifth,
      navigationOptions: ({ navigation }) => ({
        title: 'Confirmación Pago de Tarjeta',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //PayCardSixth
    PagarTarjeta_Sexta: {
      screen: PayCardSixth,
      navigationOptions: ({ navigation }) => ({
        title: 'Ticket',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    // PayCardsAmountController
    PagarTarjeta_ControladorMonto: {
      screen: PayCardsAmountController,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Tarjetas',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PayCardsNumberController
    PagarTarjeta_ControladorNumero: {
      screen: PayCardsNumberController,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Tarjetas',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PayCardsNumberConfirmation
    PagarTarjeta_ConfirmacionNumero: {
      screen: PayCardsNumberConfirmation,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Tarjetas',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PayLoansFirst
    PagarPrestamo_Primera: {
      screen: PayLoansFirst,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Préstamos',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PayLoansSecond
    PagarPrestamo_Segunda: {
      screen: PayLoansSecond,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Préstamos',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PayLoansThird
    PagarPrestamo_Tercera: {
      screen: PayLoansThird,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Préstamos',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PayLoansFourth
    PagarPrestamo_Cuarta: {
      screen: PayLoansFourth,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Préstamos',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PayLoansFifth
    PagarPrestamo_Quinta: {
      screen: PayLoansFifth,
      navigationOptions: ({ navigation }) => ({
        title: 'Confirmación Pago de Préstamos',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //PayLoansSixth
    PagarPrestamo_Sexta: {
      screen: PayLoansSixth,
      navigationOptions: ({ navigation }) => ({
        title: 'Ticket',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //PayLoansAmountController
    PagarPrestamo_ControladorMonto: {
      screen: PayLoansAmountController,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Préstamos',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PayServicesFirst
    PagarServicios_Primera: {
      screen: PayServicesFirst,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Servicios',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //PayServicesSecond
    PagarServicios_Segunda: {
      screen: PayServicesSecond,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Servicios',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //PayServicesThird
    PagarServicios_Tercera: {
      screen: PayServicesThird,
      navigationOptions: ({ navigation }) => ({
        title: 'Pago de Servicios',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //PayServicesFourth
    PagarServicios_Cuarta: {
      screen: PayServicesFourth,
      navigationOptions: ({ navigation }) => ({
        title: 'Confirmación Pago de Servicios',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    },
    //PayServicesFifth
    PagarServicios_Quinta: {
      screen: PayServicesFifth,
      navigationOptions: ({ navigation }) => ({
        title: 'Ticket',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    headerMode: 'float',
    mode: 'card',
    navigationOptions: params => ({
      tabBarLabel: 'Pagar',
      gesturesEnabled: true,
      gesturesDirection: 'inverted'
    }),
    transitionConfig
  }
);

const MoreStack = StackNavigator(
  {
    /*Transferir: { 
    screen: TransferenceHome,
    navigationOptions: ({navigation}) => ({
      title:'Transferir',
      headerTitleStyle :headerTitleStyle,
      headerRight:<View style={styleHeaderRightButton} />,
      headerLeft:(<View></View>),
      headerStyle

    })
  },*/

    Mas: {
      screen: MoreView,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    //PendingAuthorizationHome
    Operaciones_Pendientes: {
      screen: PendingAuthorizationHome,
      navigationOptions: ({ navigation }) => ({
        title: 'Autorizaciones Pendientes',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PendingAuthorizationSecond

    Operaciones_Pendientes_Segunda: {
      screen: PendingAuthorizationSecond,
      navigationOptions: ({ navigation }) => ({
        title: 'Autorizar Pendiente',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PendingAuthorizationThird

    Operaciones_Pendientes_Tercera: {
      screen: PendingAuthorizationThird,
      navigationOptions: ({ navigation }) => ({
        title: 'Ticket',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },

    //CheckbookFirst
    Chequera_Primera: {
      screen: CheckbookFirst,
      navigationOptions: ({ navigation }) => ({
        title: 'Solicitar Chequera',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },
    Chequera_Segunda: {
      screen: CheckbookSecond,
      navigationOptions: ({ navigation }) => ({
        title: 'Solicitar Chequera',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },
    Chequera_Tercera: {
      screen: CheckbookThird,
      navigationOptions: ({ navigation }) => ({
        title: 'Confirmar Solicitud',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },

    //CheckbookFourth
    Chequera_Cuarta: {
      screen: CheckbookFourth,
      navigationOptions: ({ navigation }) => ({
        title: 'Ticket',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },

    //BranchOffices
    Sucursales: {
      screen: BranchOffices,
      navigationOptions: ({ navigation }) => ({
        title: 'Sucursales y ATMs',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },

    //Contactless
    Contactless: {
      screen: Contactless,
      navigationOptions: ({ navigation }) => ({
        title: 'Contactless',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },

    //PersonalData
    Datos_Personales: {
      screen: PersonalData,
      navigationOptions: ({ navigation }) => ({
        title: 'Mis datos personales',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },

    //ChangeProfile
    Cambiar_Perfil: {
      screen: ChangeProfile,
      navigationOptions: ({ navigation }) => ({
        title: 'Cambio de Perfil',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },

    //MessageBank
    Mensaje_Banco: {
      screen: MessageBank,
      navigationOptions: ({ navigation }) => ({
        title: 'Mensaje al Banco',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <View />,
        headerStyle: headerStyleNoShadow
      })
    },
    //LoginMethod
    Metodo_Login: {
      screen: LoginMethod,
      navigationOptions: ({ navigation }) => ({
        title: 'Mensaje de Login',
        headerTitleStyle: headerTitleStyle,
        headerRight: <View style={styleHeaderRightButton} />,
        headerLeft: <BackButton navigation={navigation} />,
        headerStyle: headerStyleNoShadow
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    headerMode: 'float',
    mode: 'card',
    navigationOptions: params => ({
      tabBarLabel: 'Más',
      gesturesEnabled: true,
      gesturesDirection: 'inverted'
    }),
    transitionConfig
  }
);

export const Tabs = TabNavigator(
  {
    Favoritos: { screen: FavStack },
    Productos: { screen: ProdStack },
    Transferir: { screen: TranStack },
    Pagar: { screen: PayStack },
    Mas: { screen: MoreStack }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Favoritos':
            return (
              <Image
                source={require('../../img/RecursosHSBC/TabBar/star.png')}
                resizeMode={'contain'}
                style={[
                  iconTabBar,
                  { tintColor: focused ? theme.colorPrincipal : undefined }
                ]}
              />
            );
            break;
          case 'Productos':
            return (
              <Image
                source={require('../../img/RecursosHSBC/TabBar/Inicio.png')}
                resizeMode={'contain'}
                style={[
                  iconTabBar,

                  { tintColor: focused ? theme.colorPrincipal : undefined }
                ]}
              />
            );
            iconName = 'home';
            break;
          case 'Transferir':
            return (
              <Image
                source={require('../../img/RecursosHSBC/TabBar/Transferir.png')}
                resizeMode={'contain'}
                style={[
                  iconTabBar,
                  { tintColor: focused ? theme.colorPrincipal : undefined }
                ]}
              />
            );
            iconName = 'exchange';
            break;
          case 'Pagar':
            return (
              <Image
                source={require('../../img/RecursosHSBC/TabBar/Pagar.png')}
                resizeMode={'contain'}
                style={[
                  iconTabBar,
                  { tintColor: focused ? theme.colorPrincipal : undefined }
                ]}
              />
            );
            iconName = 'money';
            break;
          case 'Mas':
            return (
              <Image
                source={require('../../img/RecursosHSBC/TabBar/Mas.png')}
                resizeMode={'contain'}
                style={[
                  iconTabBar,
                  { tintColor: focused ? theme.colorPrincipal : undefined }
                ]}
              />
            );


            iconName = 'ellipsis-h';
            break;
        }
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: theme.colorPrincipal,
      inactiveTintColor: 'gray',
      labelStyle: {
        top: -2
      },
      style: {
        backgroundColor: '#FFFFFF',
        borderTopColor: '#F3F3F3',
        borderTopWidth: 1   
      }
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);

export const Public = StackNavigator({
  MasterLogin: {
    screen: MasterLogin,
    navigationOptions: {
      header: null
    }
  }
});

export const WelcomeLogin = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  }
});

export const QuestionLogin = StackNavigator({
  Question: {
    screen: Question,
    navigationOptions: {
      header: null
    }
  }
});

const Router = StackNavigator(
  {
    Public: {
      screen: Public,
      navigationOptions: {
        gesturesEnabled: false
      }
    },

    Question: {
      screen: QuestionLogin,
      navigationOptions: {
        gesturesEnabled: false
      }
    },

    Welcome: {
      screen: WelcomeLogin,
      navigationOptions: {
        gesturesEnabled: false
      }
    },

    Tabs: {
      screen: Tabs,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: 'Public' //signedIn ? "Tabs" : "Public",
  }
);

export default Router;

/*export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      Public: {
        screen: Public,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false
        }

      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: "Public"//signedIn ? "Tabs" : "Public",

    }
  );
};*/
