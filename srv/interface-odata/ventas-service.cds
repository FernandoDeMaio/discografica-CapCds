using {ventas} from '../../db/ventas';

service VentasService {
    entity Invoice       as projection on ventas.Invoice;
    entity InvoiceDetail as projection on ventas.InvoiceDetail;
}
