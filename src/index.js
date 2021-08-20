const express = require('express')
require('./db/mongoose.js')
const dashboardRouter = require('./routers/admin.js')
const employeeRouter = require('./routers/employee.js')
const serviceRouter = require('./routers/service.js')
const demandRouter = require('./routers/demand')
const documentsRouter = require('./routers/document')
const demandAccountRouter = require('./routers/demandAccount')
const typeOfServiceRouter = require('./routers/typeOfService.js')
const regulationsRouter = require('./routers/regulations.js')
const graphAllRouter = require('./routers/graphAll.js')
const graphServiceRouter = require('./routers/graphService.js')
const graphTOSRouter = require('./routers/graphTOS.js')

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use(dashboardRouter)
app.use(employeeRouter)
app.use(typeOfServiceRouter)
app.use(serviceRouter)
app.use(demandRouter)
app.use(demandAccountRouter)
app.use(documentsRouter)
app.use(regulationsRouter)
app.use(graphAllRouter)
app.use(graphServiceRouter)
app.use(graphTOSRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})