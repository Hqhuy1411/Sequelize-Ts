
import express, {Express , Request, Response,NextFunction} from 'express'
import testRouter from './test.routers'
export function routers(app : Express){

/**
 * @openapi
 * /hello:
 *   get:
 *     tags:
 *       - Hello
 *     description: Test swagger
 *     responses:
 *       '200':
 *         description: App is running
 */
    app.use('/hello' , (req : Request,res :Response)=>{
        res.sendStatus(200)
    })
    app.use('/test',testRouter)
  

}