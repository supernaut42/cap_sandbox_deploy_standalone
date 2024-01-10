using {cap.sandbox.deploy as my} from '../db/schema';

service Dummy {

    entity DummyEntity @(restrict : [
            {
                grant : [ 'READ' ],
                to : [ 'DummyViewer' ]
            },
            {
                grant : [ '*' ],
                to : [ 'DummyAdmin' ]
            }
      ]) as projection on my.DummyEntity;

}