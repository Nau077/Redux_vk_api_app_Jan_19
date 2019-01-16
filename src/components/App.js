import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer' // изменили импорт
import PageContainer from '../containers/PageContainer' // изменили импорт

class App extends Component {
  render() {
    return (
      <div className="app">
        <PageContainer />
        <UserContainer />
      </div>
    )
  }
}

export default App

// class App extends Component {
//   render() {
//     const { user, page, getPhotosAction, handleLoginAction } = this.props
//     return (
//       <div className="app">
//         {/* добавили error prop для Page */}
//         <Page
//           photos={page.photos}
//           year={page.year}
//           isFetching={page.isFetching}
//           error={page.error}
//           getPhotos={getPhotosAction}
//         />
//        <User
//           name={user.name}
//           isFetching={user.isFetching}
//           error={user.error}
//           handleLogin={handleLoginAction}
//         />
//     </div>
//     )
//   }
// }

// приклеиваем данные из store
// const mapStateToProps = store => {
//   return {
//     user: store.user, // вытащили из стора (из редьюсера user все в переменную thid.props.user)
//     page: store.page,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getPhotosAction: year => dispatch(getPhotos(year)),
//     // "приклеили" в this.props.handleLoginAction функцию, которая умеет диспатчить handleLogin
//     handleLoginAction: () => dispatch(handleLogin()),
//   }
// }

// внутри mapDispatchToProps вернули объект, 
// который в итоге приклеится в this.props (так же, как и было в mapStateToProps).

// в конце, мы решили в "приклееном объекте" создать функцию setYearAction [1], 
// суть которой сводится к следующему: "диспатчни" импортированный выше setYear с переданным годом.

// в наш компонент App, с помощью connect(mapStateToProps)
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)