namespace ventas;

using {managed} from '@sap/cds/common';


entity Invoice : managed {
    key ID    : UUID;
        total : Decimal;

}

entity InvoiceDetail : managed {
    key ID          : UUID;
        item        : String;
        description : String(1064);
        quantity    : Int16;
}
