import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'

function IndexPage() {
  const [displayModal, setDisplayModal] = useState(false)

  const openDisplayModal = () => {
    setDisplayModal(true)
  }

  const closeDisplayModal = () => {
    setDisplayModal(false)
  }

  const renderFooter = () => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={closeDisplayModal}
          className="p-button-text"
        />
        <Button label="Yes" icon="pi pi-check" onClick={closeDisplayModal} autoFocus={true} />
      </div>
    )
  }

  return (
    <main className="main">
      {/*<Button label="Show" icon="pi pi-external-link" className="p-button-sm" onClick={openDisplayModal} />*/}
      <Dialog
        header="Header"
        visible={displayModal}
        modal={false}
        style={{ width: '50vw' }}
        footer={renderFooter}
        onHide={closeDisplayModal}
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </Dialog>
    </main>
  )
}

export default IndexPage
