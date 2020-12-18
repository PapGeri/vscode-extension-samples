// global variable
const bit<16> TYPE_IPV4 = 0x800;

// local variable in control

typedef bit<32>  IPv4Address;

control TopPipe(inout Parsed_packet headers,
                in error parseError,
                in InControl inCtrl,
                out OutControl outCtrl) {
    IPv4Address nextHop; 

	apply {}
}