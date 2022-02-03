import { useState } from 'react'
import * as S from './style'
import CardAddPage from './pages/CardAddPage'
import CardListPage from './pages/CardListPage'
import CardAddCompletePage from 'pages/CardAddCompletePage'
import { PAGES } from './constants'
import { PageProps } from 'type'
import AppProvider from 'AppContext'

function App() {
  const [page, setPage] = useState(PAGES.CARD_ADD)

  return (
    <S.Root>
      <S.App>
        <AppProvider>{cardPages[page]({ setPage })}</AppProvider>
      </S.App>
    </S.Root>
  )
}

const cardPages = {
  [PAGES.CARD_ADD]: (props: PageProps) => <CardAddPage {...props} />,
  [PAGES.CARD_LIST]: (props: PageProps) => <CardListPage {...props} />,
  [PAGES.CARD_ADD_COMPLETE]: (props: PageProps) => <CardAddCompletePage {...props} />,
}

export default App
